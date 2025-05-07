# Final Project

<b>Machine Learning PSAM 5020 | Spring 2025</b><br>
Monsicha Srisuantang, MS Data Visualisation Parsons School of Design

## Milestone 4: 

I successfully ran the OpenAI API on nearly 9,000 images! The full process took about three days.
- First, I batch-processed the images — starting with 100 to tweak the prompts, then scaling up to 300–500 at a time. Only about 500 images didn’t detect any signs. Some of the misses weren’t actual store signs anyway, like ads on trucks in front of the store, because the original images came from Google Street View.
<br>📓 Process notebook: [01_detect_imgs_openAI.ipynb](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/01_detect_imgs_openAI.ipynb)
<br>🪄 Results: [store_sign_results.json](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/store_sign_results.json)

- Next, I cleaned things up by filtering out images without signs and converting string outputs into arrays for easier to use. Afterthought, it would’ve been smoother if I’d set up the prompt to output arrays from the start — but I didn’t want to re-run everything, so I handled it after.
<br>📓 Cleanup notebook: [02_explore_imgs.ipynb](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/02_explore_imgs.ipynb)
<br>🪄 Cleaned results: [store_sign_cleaned.json](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/store_sign_cleaned.json)

- Finally, I merged everything with my main store dataset using the image IDs, and now it’s all ready for my data viz thesis! 🎉
<br>📓 Merge notebook: [03_merge_imgs.ipynb](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/03_merge_imgs.ipynb)
<br>🪄 Merged results: [merged_df.json](https://github.com/Machine-Learning-S25/project/blob/main/Milestone4/merged_df.json)

- If you’re curious, here’s [a demo video record of my thesis presentation](https://drive.google.com/file/d/1J-rOCbhMxKa1XDupdZsYDdb3-z3tZMyo/view?usp=sharing). I still have a few details to polish, but this shows how I’m using the results! Here are some preview✨
  
<img width="800" alt="Screenshot 2025-05-06 at 11 41 59 PM" src="https://github.com/user-attachments/assets/41660e29-1efd-4f78-ac33-4a1f73550337" />
<br>Result images from green color stores
<br><br>

<img width="800" alt="Screenshot 2025-05-06 at 11 42 49 PM" src="https://github.com/user-attachments/assets/72762229-3021-45c3-9b66-be72872bde9a" />
<br>Result on the map

## BONUS 👻
From one of the ideas I proposed back in Milestone 1 — using a pose tracker to create something fun and interactive — I ended up developing this in another class, Data as Material, and wanted to share it here too!<br>

Using ML5.js together with the MET Open Data, I worked with images of Buddha/Buddhist sculptures to detect their poses and store that pose data. Then, I calculated the distance between keypoints and let users upload their own image or capture from their webcam to try and match poses from the archive.<br>

It’s not super accurate — maybe the calculations or the input data aren’t quite robust yet — and it only worked on about 200 images from the archive. But still, it’s been a really fun experiment to explore! [Link to the site](https://monsichasris.github.io/living-sculpture/)


## Milestone 3: Update

After exploring Zero-shot and YOLO World (files in the [milestone2](https://github.com/Machine-Learning-S25/project/tree/main/Milestone2) folder), which took a lot of time to run, I ended up using the OpenAI API to detect:

- Whether there is a sign in the image
- The color of the sign (both text and background)
- Font styles, e.g., Sans-serif, Serif, Script

Note: I'm not sure if this counts as an ML project because I didn't build any model, but rather explored existing models. If it doesn't count, I will follow up with the homework assignments after week 10.

## Milestone 02: On Process

- I tried using this [YOLO World](https://huggingface.co/spaces/stevengrove/YOLO-World) with "store sign" as a vocabulary.
- Here is the [Colab notebook](https://colab.research.google.com/drive/1yWjTB8Jn_Nhl7WuIZPe4Y3TSePwLlPNd#scrollTo=23e065a1) that ChatGPT helped me set up because I had some problems with my Python environment in my local VS Code.
- Here are all my [images](https://github.com/monsichasris/thesis/tree/main/public/street_view_images) from Google Street View, which I have in my GitHub repo.

- I tried detecting signs in the images using your recommendation [Zero-shot object detection model on Colab](https://colab.research.google.com/drive/13NEVTO0-jVZzd8Inwl_DPUeSw6_Uf6K9?usp=sharing) However, it didn't work well because it gave higher scores to irrelevant objects rather than the actual signs I needed.<br><br>
  <img src="https://github.com/user-attachments/assets/c1b5455f-d6fc-4f7f-a4d5-665c63922542" width="400" />
  <img src="https://github.com/user-attachments/assets/ec573cd3-dfac-4d7d-9198-9d1d6928d5dd" width="400" />

## Milestone 01: Ideation

### Idea 1

[Cat and Dog in Museum](https://monsichasris.github.io/major-studio-1/project01/) - I made this project last semester using data from Smithsonian Museums
I categorized by title or description text provided, but the result is not accurated as much as I hope. Since I didn't know ML back then, Now I know some!
I would like to revisit and use ML to categorized cat and dog in form of art like painting, sculpture etc. to see how much it could be better.
<br><li>**Do you expect to have to do a lot of pre-processing of the data ?** - I don't think so, I can continue use from what I have done.
<br><li>**Does it make sense to have data split into train/test datasets ?** - Yes.. I think some of them clear enough to be a train.
<br><li>**How would you evaluate your model/tool/visualizations ?** - Error check / Score them.
<br>

<figure>
<img width="400" alt="Screenshot 2025-04-02 at 12 16 50 AM" src="https://github.com/user-attachments/assets/70d6630d-17bb-41a6-9287-e3ab149f39ab" /><br>
<figcaption>Some of them quite difficult to see as in this image.</figcaption>
</figure>

### Idea 2

I would like to try using ML with my thesis [Figjam plan](https://www.figma.com/board/BmwD3vAI49ilARm5Hjtvlb/MSDV-Thesis?node-id=0-1&t=VEDuu5HaAwv5g53Y-1) [Figma mockup](https://www.figma.com/proto/opzcJnmFgAs0uTJeLV0gQa/MSDV-Thesis?page-id=111%3A381&node-id=136-1940&p=f&viewport=793%2C200%2C0.37&t=IweLaJA6QaEFmdzR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=136%3A1940) to detach storefront sign from google street view image and use these image to the next process later.
At first, I plan not to use ML (and might not use by the end of the actual thesis) but I hope I might found something interesting to explore futher.
<br><li>**Do you expect to have to do a lot of pre-processing of the data ?** - Not a big deal, I have to do for my thesis anyway, which I haven't done yet..
<br><li>**Does it make sense to have data split into train/test datasets ?** - I don't think so, maybe we can do something like egde detection from the sign in image.
<br><li>**How would you evaluate your model/tool/visualizations ?** - Score them like in the example below (Not sure)
<br>
<img width="375" alt="Screenshot 2025-04-02 at 12 06 53 AM" src="https://github.com/user-attachments/assets/987c21c8-a28e-4fe7-b66a-f2e74ce5f5ed" /><br>
[example from this project](https://hongqianli101.github.io/signageproject/index.html)

### Idea 3

Last one, I just want to play around with the movement or image capture. Something like this project from [Google experiment](https://experiments.withgoogle.com/move-mirror) to predicted the move and create aome kind of art form. Still not sure about this one, but it seems to be the most fun choice to explore.
<br><li>**Do you expect to have to do a lot of pre-processing of the data ?** - I need to find and research more on this data or I could try with one song or 1 video and cut the frame into images.
<br><li>**Does it make sense to have data split into train/test datasets ?** - Maybe not? It could be unsupervised the possible of the movements.
<br><li>**How would you evaluate your model/tool/visualizations ?** - Score them (as always) and maybe it can test with user input
<br>
<img width="400px" alt="Screenshot 2025-04-02 at 12 12 03 AM" src="https://github.com/user-attachments/assets/c14f46b2-7df5-4b9f-a7fd-3c648d07be01"/>
