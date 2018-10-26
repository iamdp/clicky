import React, { Component } from "react";

import "./App.css";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";

class App extends Component {
  state = {
    counter: 0,
    highScore: 0,
    statusText: "Click an image to begin!",
    cards: [
      {
        id: 1,
        brand: "fab fa-cc-paypal fa-10x",
        clicked: false
      },
      {
        id: 2,
        brand: "fab fa-android fa-10x",
        clicked: false
      },
      {
        id: 3,
        brand: "fab fa-amazon-pay fa-10x",
        clicked: false
      },
      {
        id: 4,
        brand: "fab fa-apple-pay fa-10x",
        clicked: false
      },
      {
        id: 5,
        brand: "fab fa-cc-stripe fa-10x",
        clicked: false
      },
      {
        id: 6,
        brand: "fab fa-google fa-10x",
        clicked: false
      },
      {
        id: 7,
        brand: "fab fa-js fa-10x",
        clicked: false
      },
      {
        id: 8,
        brand: "fab fa-linkedin fa-10x",
        clicked: false
      },
      {
        id: 9,
        brand: "fab fa-linkedin-in fa-10x",
        clicked: false
      },
      {
        id: 10,
        brand: "fab fa-github fa-10x",
        clicked: false
      },
      {
        id: 11,
        brand: "fab fa-npm fa-10x",
        clicked: false
      },
      {
        id: 12,
        brand: "fab fa-node fa-10x",
        clicked: false
      }
    ]
  };

  handleCardClick = event => {
    // Create a copy of the state.cards array as we don't want to modify state directly
    const prevCards = this.state.cards.slice();

    // Find the card in the array that matches the calling target.
    const card = prevCards.find(
      element =>
        element.id ===
        parseInt(event.target.parentElement.getAttribute("data-id"))
    );

    try {
      // If the card has been clicked previously:
      if (card.clicked) {
        prevCards.forEach((element, index) => {
          prevCards[index].clicked = false;
        });
        console.log(prevCards);
        // Reset the counter and cards array to the initial state
        this.setState({
          counter: 0,
          statusText: "You guessed incorrectly!",
          cards: prevCards
        });
      } else {
        // Update the card's clicked value to true.
        card.clicked = true;

        // Remove matching card from the array and add the updated card
        prevCards.splice(
          prevCards.findIndex(element => element.id === card.id),
          1,
          card
        );

        // Otherwise update the cards and increment the counter and highscore if necessary
        if (this.state.counter >= this.state.highScore) {
          this.setState({
            counter: this.state.counter + 1,
            statusText: "You guessed correctly!",
            highScore: this.state.counter + 1,
            cards: prevCards
          });
        } else {
          this.setState({
            counter: this.state.counter + 1,
            statusText: "You guessed correctly!",
            cards: prevCards
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.counter}
          statusText={this.state.statusText}
          highScore={this.state.highScore}
        />
        <Header />
        <div className="container">
          <Container cards={this.state.cards} onClick={this.handleCardClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
