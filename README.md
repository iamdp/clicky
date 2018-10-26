# Clicky Game

## Application Name: **Clicky Game**

### https://iamdp.github.io/clicky/

### App Overview

In this game of memory, attempt to click all 12 cards without ever clicking the same one again.

### App Usage

- Start by clicking on any card.
- Clicking on the same card twice will reset the game. Aim for a high score of 12.

### **App Components**

#### App

Stateful component

- counter - Maintains current score, reset to 0 if player loses the game.
- highScore - Maintains highest score achieved by user
- statusText - Contains current game status
- card - Contains all card information
  - id
  - brand
  - clicked

Contains logic to handle click event on cards

#### Container

- Displays all 12 cards created from prop array
- Responsible for shuffling cards
- Assigns click handler to cards

#### Navbar

- Displays current score, high score and status text from props.

#### Footer

- Static footer

#### Header

- Static header

## Built Using

- [NodeJS](https://nodejs.org/en/)
- [FontAwesome](https://fontawesome.com/)
- [React](https://www.npmjs.com/package/react)

## Author

David Pham - email@davidpham.ca
