# Hire Brunel Website 
```
Thence Assesment
```

This repository contains the source code for a web application developed as part of the Thence Internship. The application is built using React and demonstrates a variety of web development techniques.

## Author

Mahesh kumar  
Email: mahesh.kr.2277@gmail.com
GitHub: [krmahi](https://github.com/krmahi)

## Deployment

The application is currently deployed and can be accessed at:  
[Hire Brunel](https://hire-brunel.vercel.app/)

## Project Setup

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system
- npm or yarn installed

### Installation

Follow these steps to get your development environment running:

1. Clone the repository:
    ```bash
    git clone https://github.com/Krishna-jaiswal-24/thence-internship-task.git
    ```
2. Change directory to the project folder:
    ```bash
    cd thence-internship-task
    ```
3. Install the required packages:
    ```bash
    npm install
    ```
   or if you use yarn:
    ```bash
    yarn install
    ```
4. To run the application locally:
    ```bash
    npm run dev
    ```
   or with yarn:
    ```bash
    yarn dev
    ```

This will start the development server and open the application in your default web browser.

## Features

This project includes the following features:
- React-based architecture using functional components and hooks.
- Added all the functionalities as per the requirements specified in the figma.
- Used Tailwind CSS for styling.
- The hero image can be changed in the code by just replacing the image URL.
- Used regular expression for email validation.
- Used React Router for navigation.
- Carousel also works with a 3 seconds duration
- Redirection to home page working with set timeout and useEffect hook

## Project Structure

- src 
    - assets
    - pages  
        - Home  (Screen 1)
        - Register (Screen 2)
        - Success (Screen 3)
    - components
        - Carosel 
        - Footer
        - Navbar 
        - Accordion (drop down questions)
        - HeroImg (for editable hero image)
    - App.js  
    - main.js  
    - index.css
    - App.css
