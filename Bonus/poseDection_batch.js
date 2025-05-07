let bodyPose;
let poseData = [];
let updatedPoses = [];
let currentIndex = 0;

document
  .getElementById("startButton")
  .addEventListener("click", startProcessing);

// Load pose_results.json first
fetch("pose_results.json")
  .then((res) => res.json())
  .then((data) => {
    poseData = data;
    console.log(`✅ Loaded ${poseData.length} sculptures.`);
    document.getElementById(
      "progress"
    ).innerText = `Loaded ${poseData.length} sculptures. Click "Start Processing" to begin.`;
  });

// Initialize BodyPose
bodyPose = ml5.bodyPose(() => {
  console.log("✅ BodyPose model ready");
});

function startProcessing() {
  if (poseData.length === 0) {
    alert("No pose data loaded.");
    return;
  }
  currentIndex = 0;
  updatedPoses = [];
  processNext();
}

function processNext() {
  if (currentIndex >= poseData.length) {
    console.log("🎉 All done!");
    document.getElementById(
      "progress"
    ).innerText = `✅ All ${updatedPoses.length} images processed.`;
    offerDownload();
    return;
  }

  let sculpture = poseData[currentIndex];
  console.log(
    `🔄 Processing (${currentIndex + 1}/${poseData.length}): ${
      sculpture.object_id
    }`
  );

  document.getElementById("progress").innerText = `Processing (${
    currentIndex + 1
  }/${poseData.length}): ${sculpture.object_id}`;

  const img = new Image();
  img.crossOrigin = "anonymous"; // allow CORS

  img.onload = () => {
    let p5Image = new p5.Image(img.width, img.height);
    p5Image.canvas.getContext("2d").drawImage(img, 0, 0);

    bodyPose.detect(p5Image, (poses) => {
      if (poses.length > 0) {
        let updatedPose = {
          object_id: sculpture.object_id,
          image_url: sculpture.image_url,
          keypoints: poses[0].keypoints,
        };
        updatedPoses.push(updatedPose);
        console.log(`✅ Pose updated: ${sculpture.object_id}`);
      } else {
        console.log(`❌ No pose detected for ${sculpture.object_id}`);
      }
      currentIndex++;
      // Wait 300ms before next to be nice to the browser
      setTimeout(processNext, 300);
    });
  };

  img.onerror = () => {
    console.log(`⚠️ Failed to load image for ${sculpture.object_id}`);
    currentIndex++;
    setTimeout(processNext, 300);
  };

  img.src = sculpture.image_url;
}

function offerDownload() {
  let btn = document.createElement("button");
  btn.innerText = "Download New Pose Data";
  btn.onclick = () => {
    const blob = new Blob([JSON.stringify(updatedPoses, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pose_results_ml5.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  document.getElementById("done").appendChild(btn);
}
