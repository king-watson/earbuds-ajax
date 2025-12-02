# Kingbuds Ajax App 🎵

This project is the dynamic upgrade of my KingBuds promotional website. Building on the earlier static Earbuds Promotional Page, this assignment focuses on transforming the Model Page into an interactive, data-driven experience. Using SASS, AJAX, the HTML <template> element, and the Fetch API, the page now pulls live product information from an external API and updates the interface based on user interactions with the hotspots.

The goal of this assignment is to combine everything learned throughout the course to create a responsive, fully functional model viewer that adapts across mobile, tablet, and desktop devices while maintaining clean code, proper GitHub workflow, and a smooth user experience.

The final page is also fully responsive.

Mobile: hides the 3D model and displays a static product image

Tablet & Desktop: displays the 3D model and hides the static image

These improvements create a more realistic product-viewing experience and demonstrate the use of modern front-end techniques.

![my earbuds](images/kingbuds-readme.jpg)

## Features 🎯<br/>

Dynamic API Loading - Fetches KingBuds material data on page load using the Fetch API.

HTML Template Rendering - All materials are displayed using the <template> element for clean, reusable markup.

Interactive Hotspots - Clicking a hotspot updates the page with the correct information from the API.

Loading Spinner - Displays a loading indicator while waiting for the API response.

Error Handling - Provides user feedback if something goes wrong with the request.

Responsive Layout - Optimized for mobile, tablet, and desktop.

Static image on mobile

3D model on larger screens

SASS Workflow
Organized styling using variables, nesting, partials, and compiled output.

Proper Git Flow
Includes branching, merging, and documentation in GitHub.

## Technologies Used 🤖<br/>

HTML5

CSS3 / SASS

JavaScript 

Fetch API / AJAX

HTML Template Element

Git & GitHub

## How It Works ⚙️<br/>

On Page Load: A Fetch request runs automatically and retrieves JSON from the earbuds API.

Loading State: A spinner is shown until the data is fully received.

Success Response: The JSON is stored as the application state and used to:

Build material cards using the template element

Update the display when hotspots are clicked

Error Response: If the fetch fails, a friendly error message is shown to the user.

Device Handling: Different elements are shown or hidden depending on the viewport size.

## GitHub Workflow 📄<br/>
Work is completed on feature branches, never directly on master.

All features are merged through pull requests.

The final version is merged into the master branch before submission.

The README contains all instructions and project info.

## Installation 🧭<a id="installation"></a>
To run the portfolio locally:

- Clone this repository
- Navigate into the project directory:
- Open the index.html file in your browser, or if using a local server, start the server and navigate to localhost to view.

## Conclusion 🏁<br/>
This assignment completes the dynamic transformation of the KingBuds Model Page by combining all major course concepts—SASS, AJAX, templating, Fetch API, responsive design, and proper Git workflow—into one cohesive project.
The result is a more interactive, polished, and modern product page that provides users with a smooth experience across all devices.

## Contact 📫<a id="contact"></a>
Feel free to reach out if you’d like to collaborate or have any questions!

Email: [Kingsley Watson](mailto:watsonkingsley38@gmail.com)

Thank you for checking out my earbuds and ajax responsive site!