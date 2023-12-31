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

  // Function to close the popup
  function closePopUp() {
    // Your XPath expression
    const xpath =
      '//*[@id="chart_app_content"]/div/div[2]/div[1]/div[3]/div/div/div/span';

    // Evaluating the XPath expression and storing the result in btn
    const btn = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    // Check if the button is found
    if (btn) {
      // Simulate a click on the button
      btn.click();
    } else {
      console.error("Button not found!");
    }
  }

  function removeContent() {
    let dataLicense = document.querySelectorAll("div.card.mb-0");

    dataLicense.forEach((element) => {
      element.style.display = "none";
    });
  }

  // Function Calls
  closePopUp();
  removeContent();

  // Other code goes here maybe in future.
})();
