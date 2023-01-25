# Front-End Capstone | Project Atelier | Team Gladiolus

## Table of Contennts

* [Project Overview](#project-overview)
* [Project Details](#project-details)
* [Installation](#installation)
* [Team Members](#team-members)
* [Performance](#performance)
* [Future Optimizations](#roadmap---future-optimizations)

## Tech Stack

![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/-Testing_Library-E33332?logo=testing-library&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

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

### Questions and Answers
A list of questions will be displayed starting at two if there are two or more questions along with the answers attached to each question loading in a maximum or two answers per question on load as well. There is a more questions button will will load in two more answers to be displayed each time it is clicked and will change to scroll if sufficiently tall. The see more answers buttons will load all available answers for a product in an accordion and will change to a scroll if sufficiently tall as well. The helpful yes buttons can be clicked and will increment, but can only be clicked once. The report answer button changes to text once clicked and reports the answer to the server. The add answer and add question buttons display a modal that allows the user to input the necessary informaiton to submit a question or answer. 

https://user-images.githubusercontent.com/113811232/208348493-e29e31ed-3c2c-435b-8174-44a9f9bb8ba8.mov

### Related Items and Comparison
![Related Items GIF](https://user-images.githubusercontent.com/25358856/208263205-6674ac95-4a70-4bba-852b-50b99f758610.gif)
> The related items list allows users to scroll through a smooth carousel of related products and compare that product's characteristics against the current product. Users can click on a product card to navigate to that product's overview instantly. The outfit list lets a user view a list of products they would like to buy. They can add and remove products, and even scroll through a product's images to select an image they enjoy the most.

### Ratings and Reviews
This widget displays the ratings and reviews for the current product. This includes the average rating, the number of each star rating, and the ability to filter by star rating. The reviews lists can be sort by newest, helpful, and relevant. Each individual review includes a variety of information, including a title, summary, and optional pictures. Only two reviews load at a time, and more can be added by clicking the "Show More" button. On the left the individual product characteristic ratings are also available. 

<img width="1282" alt="Screen Shot 2022-12-19 at 1 43 02 PM" src="https://user-images.githubusercontent.com/114250629/208497073-aa02f36b-6548-49e8-8f7a-b7b7a3f08fc7.png">

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
* Timothy Williams - Questions and Answers

## Performance
![image](https://user-images.githubusercontent.com/25358856/208311738-4c1f60a2-4d38-4444-a724-acd29caa8d04.png)

## Roadmap - Future Optimizations
* Improving the overall styling and layout 
* Adding in image compression to improve loading times
* Improving accessibilty
* Including functionality for tracking user interaction of individual components
* Adding login feature that would allow the user to return to their outift or cart
