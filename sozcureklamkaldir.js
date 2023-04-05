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
        // adInitRemove sınıfıyla tüm öğelerin bir listesini alın
        var elementsToRemove = document.querySelectorAll('.ads, .stickyDesktopContainer');

        // Listede dolaşın ve her öğeyi kaldırın
        for (var i = 0; i < elementsToRemove.length; i++) {
            elementsToRemove[i].remove();
        }

        // Kaldırılacak başka öğe olup olmadığını kontrol et ve yok ise interval ı durdur. 
        if (elementsToRemove.length === 0) {
            clearInterval(intervalId);
        }
    }, 500);
})();
