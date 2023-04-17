/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io"];
  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < noun.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          domainNames.push(pronoun[i] + adj[k] + noun[j] + domains[l]);
        }
      }
    }
  }
  console.log(domainNames);
};
