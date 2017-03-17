(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a3afcbccb6a136ce11154fc8dfaf11e8";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

function Search (search){
    this.doctorList = [];
    this.location;
    this.url = "https://api.betterdoctor.com/2016-03-01/doctors?query="+ search + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=a3afcbccb6a136ce11154fc8dfaf11e8"
}

// Search.prototype.getResults = function(){
//     $get.()
// }

// Doctor.prototype.myKey = function(){
//     console.log(this.apiKey);
// }
exports.Doctor = Search

},{"./../.env":1}],3:[function(require,module,exports){
var Search = require("./../js/doctor.js").Doctor;

$(document).ready(function(){
    console.log('page loaded');
    $('#form').submit(function(event){
        console.log('in the submit');
        event.preventDefault();
        var medical = new Search("toothache");
        $.get(medical.url)
            .then(function(result){
                console.log(result);
            })
    });
})

},{"./../js/doctor.js":2}]},{},[3]);
