/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Arrays with combis of Pronouns, Adjectives, Nouns, and TLD
  let arrayPronoun = ["the", "our", "your"];
  let arrayAdj = ["bold", "amazing", "infinite"];
  let arrayNoun = ["soccer", "venture", "horizon"];
  let arrayTLD = [".org", ".net", ".com"];

  //Nested Loops printing the domain name combinations to the Console.
  for (var i = 0; i < arrayPronoun.length; i++) {
    for (var a = 0; a < arrayAdj.length; a++) {
      for (var b = 0; b < arrayNoun.length; b++) {
        for (var c = 0; c < arrayTLD.length; c++) {
          console.log(
            arrayPronoun[i] + arrayAdj[a] + arrayNoun[b] + arrayTLD[c]
          );
        }
      }
    }
  }
};
