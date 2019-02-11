//ДЗ Напишите функцию, которая выводит в HTML документ нумерованный список песен:

'use strict';
var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

var testList = document.getElementsByClassName('test-list');
for(var i = 0; i < playList.length; i++ ) {
    testList[0].innerHTML += '<ul><li>' + '<ol><li>' + playList[i].author + '</li><li>' + playList[i].song + '</li>' + '</ol>' + '</li>' + '</ul>';
}
function f(index) {
    for (var key in playList[i]) {
        x = key;
    }
    return x;
}