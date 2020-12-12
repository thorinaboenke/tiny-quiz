# Tiny Quiz App

[Tiny-Quiz](https://unruffled-jennings-d88ee4.netlify.app)

Created with with [Create React App](https://github.com/facebook/create-react-app), written in TypeScript and deployed on Netlify.
ca. 4-5h over two days as a coding challenge in the interview process for a developer position

## Objectives
Multiple choice quiz, a question consists of:
- An optional image
- A question text in Markdown format
- A set of answers, each of which can be either correct or incorrect

The user has to select all correct answers from the set of possible answers.
After selecting the answers, the user should receive feedback as to whether the selection was
correct or incorrect. If it was incorrect, he or she should additionally be shown the correct solution.

Screenshot

<img src="https://github.com/thorinaboenke/tiny-quiz/blob/master/public/Screenshot%20.png" width="600" alt='quiz screenshot'>

## Technologies used

- Create React App
- Netlify

## Libraries used
- react-markdown
- jest
- cypress

## Run this project locally

Clone the repository
```bash
git clone https://github.com/thorinaboenke/tiny-quiz
```
in the created directory, to install the dependencies
```bash
yarn
```
In the created directory, to run the app in development mode

```bash
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
yarn test
```
Launches the Jest Test Runner in the interactive watch mode.

```bash
yarn run cypress open
```
Launches the Cypress Test Runner
