// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List  = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");

function logicValueToJavaScriptAST(x) {
  if (typeof x === "number") {
    return /* Unknown */0;
  } else if (x.tag) {
    return /* Literal */Block.__(1, [x[0]]);
  } else {
    return /* Identifier */Block.__(2, [x[1]]);
  }
}

function toJavaScriptAST(node) {
  var fromCmp = function (x) {
    switch (x) {
      case 0 : 
          return /* Eq */0;
      case 1 : 
          return /* Neq */1;
      case 2 : 
          return /* Gt */2;
      case 3 : 
          return /* Gte */3;
      case 4 : 
          return /* Lt */4;
      case 5 : 
          return /* Lte */5;
      case 6 : 
          return /* Noop */7;
      
    }
  };
  if (typeof node === "number") {
    return /* Unknown */0;
  } else {
    switch (node.tag | 0) {
      case 0 : 
          var condition_000 = logicValueToJavaScriptAST(node[0]);
          var condition_001 = fromCmp(node[1]);
          var condition_002 = logicValueToJavaScriptAST(node[2]);
          var condition = /* BooleanExpression */Block.__(10, [
              condition_000,
              condition_001,
              condition_002
            ]);
          return /* ConditionalStatement */Block.__(11, [
                    condition,
                    /* :: */[
                      toJavaScriptAST(node[3]),
                      /* [] */0
                    ]
                  ]);
      case 1 : 
          return /* ConditionalStatement */Block.__(11, [
                    logicValueToJavaScriptAST(node[0]),
                    /* :: */[
                      toJavaScriptAST(node[1]),
                      /* [] */0
                    ]
                  ]);
      case 2 : 
          return /* AssignmentExpression */Block.__(9, [
                    logicValueToJavaScriptAST(node[1]),
                    logicValueToJavaScriptAST(node[0])
                  ]);
      case 3 : 
          var addition_000 = logicValueToJavaScriptAST(node[0]);
          var addition_002 = logicValueToJavaScriptAST(node[1]);
          var addition = /* BooleanExpression */Block.__(10, [
              addition_000,
              /* Plus */6,
              addition_002
            ]);
          return /* AssignmentExpression */Block.__(9, [
                    logicValueToJavaScriptAST(node[2]),
                    addition
                  ]);
      case 4 : 
          var value = node[0];
          if (typeof value === "number" || value.tag) {
            return /* Unknown */0;
          } else {
            return /* VariableDeclaration */Block.__(8, [/* Identifier */Block.__(2, [value[1]])]);
          }
          break;
      case 5 : 
          return /* Block */Block.__(15, [List.map(toJavaScriptAST, node[0])]);
      
    }
  }
}

var Ast = 0;

exports.Ast                       = Ast;
exports.logicValueToJavaScriptAST = logicValueToJavaScriptAST;
exports.toJavaScriptAST           = toJavaScriptAST;
/* No side effect */
