// ==UserScript==
// @name         Nepse Alpha
// @namespace    https://github.com/cypherab01
// @version      2.1
// @description  Remove boring dialogue box at startup
// @author       Abhishek Ghimire (@cypherab01)
// @match        https://nepsealpha.com/trading/chart
// @updateURL    https://github.com/cypherab01/BoringJavaScript/raw/main/nepse_alpha/script.js
// @downloadURL  https://github.com/cypherab01/BoringJavaScript/raw/main/nepse_alpha/script.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nepsealpha.com
// @homepage     https://github.com/cypherab01/BoringJavaScript/tree/main/nepse_alpha
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function to remove an element by selector
  function removeElementBySelector(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
  }

  // Function to select and click a button
  function selectAndClickButton() {
    var button = document.querySelector(
      "button.no-border.btn.btn-side-selected"
    );
    if (button) {
      button.click();
    }
  }

  // Function to remove content
  function removeContent() {
    let dataLicense = document.querySelectorAll("div.card.mb-0");
    dataLicense.forEach((element) => {
      element.style.display = "none";
    });
  }

  // Function to check for updates
  function checkForUpdate() {
    const scriptUrl =
      "https://raw.githubusercontent.com/cypherab01/BoringJavaScript/main/nepse_alpha/script.js";

    fetch(scriptUrl)
      .then((response) => response.text())
      .then((data) => {
        const match = data.match(/@version\s+(\d+\.\d+)/);
        if (!match) {
          console.error("Unable to extract version from the GitHub script.");
          return;
        }

        const githubVersion = parseFloat(match[1]);
        const currentVersion = parseFloat(
          GM_info.script.version || "0.0" // Handle case where GM_info is not defined
        );

        if (githubVersion > currentVersion) {
          const result = window.confirm(
            "Nepse Alpha: A new version is available. Do you want to update?"
          );

          if (result) {
            window.location.replace(scriptUrl);
          }
        }
      })
      .catch((error) => {
        console.error("Error checking for updates:", error);
      });
  }

  // Call the function with the target selector
  removeElementBySelector("#app > div > div:nth-child(3)");

  // Call the function to select and click the button
  selectAndClickButton();

  // Call the function to remove content
  removeContent();

  // Call the function to check for updates
  checkForUpdate();
})();
