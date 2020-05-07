# star-wars-universe-spa

This is a React.js single page application where users can view the details about all the people in the Star Wars Universe provided by the SWAPI API.

[View Demo](https://aficat.github.io/star-wars-universe-spa/)

Note: When there is trouble retreiving data due to CORS error, download Google Extension "Moesif CORS" and switch on CORS before viewing application.

## Software Architecture and Design
This React.js application is equipped with Redux and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The design of this application uses the [Material UI](https://material-ui.com/) and [Semantic UI React](https://react.semantic-ui.com/) library.

## Overview

        star-wars-universe-spa
        |        
        |__ README.md (Documentation)
        |__ .gitignore
        |__ package.json
        |__ public
        |   |        
        |   |__ index.html
        |
        |__ screenshots
        |   |        
        |   |__ People_List_View.jpg
        |   |__ Person_Details.jpg
        |
        |__ src 
            |   
            |__ App.js (Application Home Page, Redux Store Provider Injected)
            |__ App.test.js
            |__ index.css 
            |__ index.js
            |__ serviceWorker.js
            |__ setupTests.js (Enzyme Testing Setup)
            |__ store.js (Redux Store Set Up & Configuration)
            |__ actions
            |   |
            |   |__ peopleActions.js (people API call)
            |   |__ personActions.js (person details API calls)
            |   |__ types.js (List of all action types)
            |   
            |__ reducers
            |   |
            |   |__ peopleReducersjs (State management for people)
            |   |__ personReducer.js (State management for each person's details)
            |   |__ index.js (Combined reducer management)
            |
            |__ components 
                |
                |__ Footer.js
                |__ Header.js
                |__ PeopleCards.js (List of People Cards)
                |__ PeopleCardsSingleCard.js (Card of each Person with its Details)
                |__ PeopleCardsSingleCardModal.js (Modal Popup for each Person with all Details)
                |__ PeopleCardsPagination.js (Pagination for People Cards)
                |__ tests
                    |__ PeopleCardsPagination.test.js
                    |__ Footer.test.js
                    |__ Header.test.js
                    |__ PeopleCards.test.js
                    |__ PeopleCardsSingleCard.test.js
                    |__ PeopleCardsSingleCardModal.test.js

## Setup Guide

### Download Repository and Run Application
1. Open Git Bash/ Command Prompt/ Terminal.

2. Git clone from HTTPS link.
```
> git clone https://github.com/aficat/star-wars-universe-spa.git
```
3. Navigate to the project folder:
```
> cd/star-wars-universe-spa
```
4. Install npm modules:
```
> npm install
```
5. Run the project:
```
> npm run start
```

### Unit Testing
1. Install: `enzyme enzyme-adapter-react-16 --dev`
2. Run `npm run test` to launch test runner.

## Screenshot of Application

![Star Wars Universe People](https://i.pinimg.com/originals/30/ae/a3/30aea3c30220b838eb4af36fa1f42e94.png)

![Person Details](https://i.pinimg.com/originals/b0/eb/a0/b0eba0ce949dac12593f84ed1b80efcd.png)