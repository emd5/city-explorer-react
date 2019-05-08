# City Explorer - Part 1

It's time to rebuild the City Explorer front end! We currently have a live City Explorer application running on 2 servers. The front end application is currently hosted at Github Pages.

That front end uses some older technologies that you worked with earlier in this course (jQuery and Handlebars). It's time to upgrade into the newest tech ... namely, React!

One caveat is that we don't want our clients to feel the impact. The look, feel, and functionality needs to remain exactly as it is. We can do a facelift at a later date. Our priority right now is to get this running on React.

## Author 
Liz Mahoney


## Configuration

This repository must include the following config files:

- `README.md` - with documentation regarding the lab and it's current state of development. Check the "documentation" section below for more details on how that should look AT MINIMUM
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including react and react-dom
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.
city_explorer_react (repository)

  ├──public
  │  └── index.html
  ├──src
  │  └── app.js
  │  └── index.js
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  ├── README.md`

## Overview

For this assignment, is to re-implement the City Explorer front end through the use of ReactJS. The goal for today is to get a static/placeholder representation of the application configured and setup so that we can progressively modularize and build against that throughout the week. Essentially, setting up and building the scaffold today so that we can wire things together and integrate 3rd party APIs later on.

## Time Estimate

```
Number and name of feature: Build out Components

Estimate of time needed to complete: _____

Start time: 9:30am

Finish time: 10:30am

Actual time needed to complete: 1 hr
```


## Requirements

Create the following components, all within the `app.js` file.

### \<App>

Should contain all child components, which are wrapped in <React.Fragment>. The breakdown of child components is as follows. We will be expanding on this structure throughout the week:

```
  <App>
    <Header>
    <Main>
      <Search>
      <Map>
      <Result>
```
### \<Header>

- Should contain an `<h1>` with the title of the application (City Explorer).
- Should contain a `<p>` with the following text: "Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"

### \<Main>

- Should contain the homepage markup and subsequent components. This includes the following:
- A search box and button for searching for a location
- A Google Maps placeholder
- 5 result boxes that will be used to house results our future API calls. Use "lorem ipsum" text for now. Those APIs include: the Dark Sky API, Yelp API, Meetup API, MovieDB API, and the Hiking Project API.
- Use the current deployed site or previous City Explorer front end code as a way to capture what features should exist. All dynamic data should be filled with placeholder content for now. We'll update this later in the week with real-time data from 3rd party APIs.

### \<Search>

- Should contain an `<input>` and a `<button>` element for searching for a location. This does not have to be wired to work yet - just the markup is required.
  
### \<Map>

- Should contain a Google Map placeholder. This does not have to be wired up work yet- just the markup is required.

### \<Result>

- Should contain an `<section>` element with placeholder content that will be filled with real-time data later in the week. You may simply nest 5 <Result> components inside of <Main> for the time being. We will be recomposing this later in the week.

## Available Scripts

In the project directory, run:

***`npm start`***

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

***`npm test`***

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

***`npm run build`***

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

***`npm run eject`***

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

***`npm run build` fails to minify***

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
