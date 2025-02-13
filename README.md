# Electric Car Magazine - Online Presence

## Overview

This project was developed as a final project for the web development module during my BA in Computer Science. The goal was to produce an electronic magazine website on any given topic, and I chose to focus on **electric cars**. The project showcases my understanding of **JavaScript**, **HTML**, and **CSS**, while emphasizing **interactivity**, **responsiveness**, and **clean code**. It includes features like a navigation menu, image carousel, newsletter signup, dynamic content display, and more. This project scored 89% at a UK university where 70% and up is considered an A. 

This was one of my earliest projects from 2021, and now, as a 3rd-year student, I have a much deeper understanding of web development. I now have more advanced skills and knowledge that could improve the code and add new features. 


## Features

- **Responsive Design:** The carousel adapts to various screen sizes.
- **Next/Previous Buttons:** Navigate through images with previous and next controls.
- **Indicators:** A set of dots to show which slide is currently being viewed.
- **Fading Transition:** Smooth fade-in and fade-out animation between slides.
- **Hover Effects:** Interactive hover effects on navigation buttons and dots.
- **Mobile-First:** Adjustments to font size and layout for mobile devices.


## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/image-carousel.git


## How It Works

- The HTML structure contains the slideshow container with images and controls (next, previous buttons, and dot indicators).
- The CSS file handles the styling and animations, including the fade effect, button positioning, and responsiveness.
- JavaScript (in script.js) is responsible for the dynamic functionality, such as switching between images and updating the active dot.


## Project Status
This project is complete as a proof of concept and demonstrates fundamental web development skills. However, it is one of my earliest projects, and with more experience, several improvements could be made.


## Improvements (As a 3rd Year Student)
As a 3rd-year student now, I've gained more experience in web development, and there are a few improvements that could be implemented in this project:

### 1. Implementing a Modular JavaScript Approach
- **Current State:** The JavaScript code is functional but not optimized.
- **Improvement:** I would refactor the JavaScript code into more modular components, such as creating a Carousel class. This would improve maintainability and scalability of the code.

### 2. Adding Keyboard Navigation
- **Current State:** The carousel only supports navigation via mouse clicks on buttons or dots.
- **Improvement:** I would implement keyboard event listeners (e.g., ArrowLeft, ArrowRight) to allow users to navigate through the carousel using their keyboard for better accessibility.

### 3. Lazy Loading of Images
- **Current State:** All images are loaded as soon as the page loads.
- **Improvement:** I would implement lazy loading for images, which would delay the loading of images that are not currently in the viewport. This would improve performance, especially for larger galleries or when the user has a slow internet connection.

### 4. Refining the CSS with Flexbox/Grid
- **Current State:** The CSS is fairly simple and uses basic positioning for layout.
- **Improvement:** I would refactor the layout using Flexbox or CSS Grid for more flexibility and easier alignment of elements. This would also make it more adaptable to future design changes.

### 5. Adding Autoplay Functionality
- **Current State:** The carousel requires user interaction to navigate through images.
- **Improvement:** I would add an autoplay feature that cycles through the slides automatically after a certain period, with an option to pause and resume.

### 6. Enhancing Accessibility
- **Current State:** The project does not have many accessibility features.
- **Improvement:** I would add aria labels and roles to the HTML elements for better screen reader support. For example, adding aria-label to the buttons and slides would make the carousel more accessible for users with disabilities.

### 7. Cross-Browser Testing
- **Current State:** The carousel works well in modern browsers but may not be fully compatible with older browsers.
- **Improvement:** I would ensure the carousel is fully cross-browser compatible, including testing for older versions of Internet Explorer and adding fallbacks for unsupported features (such as CSS Grid).




