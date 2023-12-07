// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2023-12-07
// @description  try to take over the world!
// @author       You
// @match        https://nepsealpha.com/trading/chart
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nepsealpha.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your XPath expression
    const xpath = '//*[@id="chart_app_content"]/div/div[2]/div[1]/div[3]/div/div/div/span';

    // Function to click the button
    function clickButton() {
        // Evaluating the XPath expression and storing the result in btn
        const btn = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        // Check if the button is found
        if (btn) {
            // Simulate a click on the button
            btn.click();
        } else {
            console.error('Button not found!');
        }
    }

    // Call the function to click the button
    clickButton();

    // You can add more code here

})();
