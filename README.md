# Front-End Capstone | Project Atelier | Team Gladiolus

## Table of Contennts

* [Project Overview](#project-overview)
* [Project Details](#project-details)
* [Installation](#installation)
* [Team Members](#team-members)
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
* an image/ demo of your widget
* brief description of your widget

### Ratings and Reviews
* an image/ demo of your widget
* brief description of your widget

### Questions and Answers
* an image/ demo of your widget
* brief description of your widget

### Related Items and Comparison
![Related Items GIF](https://user-images.githubusercontent.com/25358856/208263205-6674ac95-4a70-4bba-852b-50b99f758610.gif)
> The related items list allows users to scroll through a smooth carousel of related products and compare that product's characteristics against the current product. Users can click on a product card to navigate to that product's overview instantly. The outfit list lets a user view a list of products they would like to buy. They can add and remove products, and even scroll through a product's images to select an image they enjoy the most.

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
* Linh Hoang-Watson - Widget
* Cordelia Payson - Ratings and Reviews
* Timothy Williams - Widget

## Roadmap - Future Optimizations
* Improving the overall styling and layout 
* Adding in image compression to improve loading times
* Improving accessibilty
* Including functionality for tracking user interaction of individual components
* Add login feature that would allow the user to return to their outift or cart
