(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).ky = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"ky",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"жыл",relative:{0:"быйыл",1:"эмдиги жылы","-1":"былтыр"},relativeTime:{future:{one:"{0} жылдан кийин",other:"{0} жылдан кийин"},past:{one:"{0} жыл мурун",other:"{0} жыл мурун"}}},month:{displayName:"ай",relative:{0:"бул айда",1:"эмдиги айда","-1":"өткөн айда"},relativeTime:{future:{one:"{0} айдан кийин",other:"{0} айдан кийин"},past:{one:"{0} ай мурун",other:"{0} ай мурун"}}},day:{displayName:"күн",relative:{0:"бүгүн",1:"эртеӊ",2:"бүрсүгүнү","-1":"кечээ","-2":"мурдагы күнү"},relativeTime:{future:{one:"{0} күндөн кийин",other:"{0} күндөн кийин"},past:{one:"{0} күн мурун",other:"{0} күн мурун"}}},hour:{displayName:"саат",relativeTime:{future:{one:"{0} сааттан кийин",other:"{0} сааттан кийин"},past:{one:"{0} саат мурун",other:"{0} саат мурун"}}},minute:{displayName:"мүнөт",relativeTime:{future:{one:"{0} мүнөттөн кийин",other:"{0} мүнөттөн кийин"},past:{one:"{0} мүнөт мурун",other:"{0} мүнөт мурун"}}},second:{displayName:"секунд",relative:{0:"азыр"},relativeTime:{future:{one:"{0} секунддан кийин",other:"{0} секунддан кийин"},past:{one:"{0} секунд мурун",other:"{0} секунд мурун"}}}}},{locale:"ky-Cyrl",parentLocale:"ky"},{locale:"ky-Cyrl-KG",parentLocale:"ky-Cyrl"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});