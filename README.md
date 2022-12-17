# Front-End Capstone | Project Atelier | Team Gladiolus

## Table of Contennts

* [Project Overview](#project-overview)
* [Project Details](#project-details)
* [Installation](#installation)
* [Team Members](#team-members)
* [Future Optimizations](#roadmap---future-optimizations)

## Tech Stack

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![image](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![image](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

## Project Overview

This app was created for the Hack Reactor Front End Capstone project.
The objective was to deliver a fully functional web application for an e-commerce website. Our team worked together on a single code base by dividing up the widgets, but working collaboratively to produce a single front end application powered by React and Redux. The user is able to interact with the product page for any given item. This includes the ability to look at product photos, browse related products, and read customer questions and reviews.

## Project Details

### Product Overview
**Features:** an image gallery, product details, dropdown menus and product buttons that allow users to interact with

*Gallery*

An image gallery allows users to look at many different sample images that are specific to the currently selected style of the product. Each style will have a set of images associated with it in which users can navigate through with left and right arrows. Clicking on the main image view will expand it which allows users to zoom in (2.5x) and move around the image. The gallery will allow users to browse between and zoom in (2.5x) on these photos. The gallery will be viewable in two states - a default collapsed view, and an expanded view. 

![demo 1](https://user-images.githubusercontent.com/111917573/208265263-4288656e-69b0-40fa-b4ef-136e95fcb8bb.gif)

*Product Information*

Basic information about the product will be displayed on the right. This includes:
* the average star rating based on its reviews 
* a link stating “Read all reviews” that shows the total number of reviews and upon clicking will scroll the page to the Ratings & Reviews module
* product category and name
* product price that is actually derived from the style currently selected - will be displayed in red when product is on sale 

![demo 2](https://user-images.githubusercontent.com/111917573/208265364-5017d325-3719-453f-841f-ed34c3706f2e.gif)

*Style Selector and Size/Quantity Dropdown Menus*

User is able to toggle between all the styles of the product with the current selection being indicated with a checkmark. Any style selected will update the size and quantity dropdowns accordingly based on availability. 

*Add to Cart Button*

This button allows users to add items to their cart after both size and quantity are selected. A confirmation will pop up upon a successful transaction. If no size and quantity is selected, a message stating 'Please select size!' will appear.   

*Star Button*

This button allows users to add items to their outfit list. 

![demo 3](https://user-images.githubusercontent.com/111917573/208265529-6a928588-cd67-4556-b8dc-a0a494f18bf5.gif)

### Ratings and Reviews
* an image/ demo of your widget
* brief description of your widget

### Questions and Answers
* an image/ demo of your widget
* brief description of your widget

### Related Items and Comparison
* an image/ demo of your widget
* brief description of your widget


## Installation

To get a local copy up and running follow these simple steps:
###### Pre-Installation Requirements
    Node
    NPM

###### Instructions
1. Fork and then Clone the repo to your GitHub.
   ```
   git clone https://github.com/hr-gladiolus/fec-gladiolus.git
   ```
2. Install all NPM packages.
   ```
   npm install
    ```
3. Compile Webpack.
   ```
   npm run build
    ```
4. Start the server.
   ```
   npm run server
    ```
5. Rename the `example.config.js` file to `config.js`.
6. Acquire a github personal access token to access the API and insert token into `config.js`.
7. Navigate to your web browser.
http://localhost:3000/

## Team Members

* Gerritt Broadwater - Related Items and Outfit List
* Linh Hoang-Watson - Product Overview
* Cordelia Payson - Ratings and Reviews
* Timothy Williams - Widget

## Roadmap - Future Optimizations
* Improving the overall styling and layout 
* Adding in image compression to improve loading times
* Improving accessibilty
* Including functionality for tracking user interaction of individual components
* Add login feature that would allow the user to return to their outift or cart
