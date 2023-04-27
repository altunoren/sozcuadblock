// ==UserScript==
// @name         Sözcü Reklam Kaldırma Sistemi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sözcü sitesindeki reklamları tek kod ile kaldırma
// @author       İsmail Altunören
// @match        https://www.sozcu.com.tr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sozcu.com.tr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var intervalId = setInterval(function() {
        // Get a list of all elements with class adInitRemove
        var elementsToRemove = document.querySelectorAll('.ads, .stickyDesktopContainer, .content-inner-ad');

        // Loop through the list and remove each element
        for (var i = 0; i < elementsToRemove.length; i++) {
            elementsToRemove[i].remove();
        }

        // Stop checking if there are no more elements to remove
        if (elementsToRemove.length === 0) {
            clearInterval(intervalId);
        }
    }, 500);
})();
