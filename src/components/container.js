import React from "react";
import "../css/container.css";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const Container = ({ cards, onClick }) => {
  cards = shuffle(cards);

  return (
    <main className="container">
      {cards.map(card => (
        <div key={card.id} data-id={card.id} onClick={onClick}>
          <i className={card.brand} />
        </div>
      ))}
    </main>
  );
};

export default Container;
