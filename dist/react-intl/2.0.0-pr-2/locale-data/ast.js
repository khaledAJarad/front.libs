(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).ast = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{locale:"ast",pluralRuleFunction:function(e,a){var t=String(e).split("."),i=!t[1];return a?"other":1==e&&i?"one":"other"},fields:{year:{displayName:"añu",relative:{0:"esti añu",1:"l’añu viniente","-1":"l’añu pasáu"},relativeTime:{future:{one:"En {0} añu",other:"En {0} años"},past:{one:"Hai {0} añu",other:"Hai {0} años"}}},month:{displayName:"mes",relative:{0:"esti mes",1:"el mes viniente","-1":"el mes pasáu"},relativeTime:{future:{one:"En {0} mes",other:"En {0} meses"},past:{one:"Hai {0} mes",other:"Hai {0} meses"}}},day:{displayName:"día",relative:{0:"güei",1:"mañana",2:"pasao mañana","-1":"ayeri","-2":"antayeri"},relativeTime:{future:{one:"En {0} dia",other:"En {0} díes"},past:{one:"Hai {0} dia",other:"Hai {0} díes"}}},hour:{displayName:"hora",relativeTime:{future:{one:"En {0} hora",other:"En {0} hores"},past:{one:"Hai {0} hora",other:"Hai {0} hores"}}},minute:{displayName:"minutu",relativeTime:{future:{one:"En {0} minutu",other:"En {0} minutos"},past:{one:"Hai {0} minutu",other:"Hai {0} minutos"}}},second:{displayName:"segundu",relative:{0:"now"},relativeTime:{future:{one:"En {0} segundu",other:"En {0} segundos"},past:{one:"Hai {0} segundu",other:"Hai {0} segundos"}}}}},{locale:"ast-ES",parentLocale:"ast"}],module.exports=exports["default"];
},{}]},{},[1])(1)
});