(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).lb = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"lb",pluralRuleFunction:function(e,n){return n?"other":1==e?"one":"other"},fields:{year:{displayName:"Joer",relative:{0:"dëst Joer",1:"nächst Joer","-1":"lescht Joer"},relativeTime:{future:{one:"an {0} Joer",other:"a(n) {0} Joer"},past:{one:"virun {0} Joer",other:"viru(n) {0} Joer"}}},month:{displayName:"Mount",relative:{0:"dëse Mount",1:"nächste Mount","-1":"leschte Mount"},relativeTime:{future:{one:"an {0} Mount",other:"a(n) {0} Méint"},past:{one:"virun {0} Mount",other:"viru(n) {0} Méint"}}},day:{displayName:"Dag",relative:{0:"haut",1:"muer","-1":"gëschter"},relativeTime:{future:{one:"an {0} Dag",other:"a(n) {0} Deeg"},past:{one:"virun {0} Dag",other:"viru(n) {0} Deeg"}}},hour:{displayName:"Stonn",relativeTime:{future:{one:"an {0} Stonn",other:"a(n) {0} Stonnen"},past:{one:"virun {0} Stonn",other:"viru(n) {0} Stonnen"}}},minute:{displayName:"Minutt",relativeTime:{future:{one:"an {0} Minutt",other:"a(n) {0} Minutten"},past:{one:"virun {0} Minutt",other:"viru(n) {0} Minutten"}}},second:{displayName:"Sekonn",relative:{0:"now"},relativeTime:{future:{one:"an {0} Sekonn",other:"a(n) {0} Sekonnen"},past:{one:"virun {0} Sekonn",other:"viru(n) {0} Sekonnen"}}}}},{locale:"lb-LU",parentLocale:"lb"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});