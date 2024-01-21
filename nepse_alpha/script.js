// ==UserScript==
// @name         Nepse Alpha
// @namespace    https://github.com/cypherab01
// @version      1.2
// @description  Remove boring dialogue box at starup
// @author       Abhishek Ghimire (@cypherab01)
// @match        https://nepsealpha.com/trading/chart
// @updateURL    https://raw.githubusercontent.com/cypherab01/BoringJavaScript/main/nepse_alpha/script.js
// @downloadURL  https://raw.githubusercontent.com/cypherab01/BoringJavaScript/main/nepse_alpha/script.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nepsealpha.com
// @homepage     https://github.com/cypherab01/BoringJavaScript/tree/main/nepse_alpha
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function removeElementBySelector(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
  }

  // Call the function with the target selector
  removeElementBySelector("#app > div > div:nth-child(3)");

  function selectAndClickButton() {
    var button = document.querySelector(
      "button.no-border.btn.btn-side-selected"
    );
    if (button) {
      button.click();
    }
  }
  selectAndClickButton();

  function removeContent() {
    let dataLicense = document.querySelectorAll("div.card.mb-0");

    dataLicense.forEach((element) => {
      element.style.display = "none";
    });
  }

  // Function Calls
  removeContent();

  // Other code goes here maybe in future.
})();
