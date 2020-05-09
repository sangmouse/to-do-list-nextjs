module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button */ "antd/es/button");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_es_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "antd/es/row");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_es_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/col */ "antd/es/col");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/checkbox */ "antd/es/checkbox");
/* harmony import */ var antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/radio */ "antd/es/radio");
/* harmony import */ var antd_es_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_es_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/form */ "antd/es/form");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_es_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input */ "antd/es/input");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_es_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_es_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/typography */ "antd/es/typography");
/* harmony import */ var antd_es_typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_es_typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/select */ "antd/es/select");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_es_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "C:\\Users\\admin\\Pictures\\to-do-list-nextjs\\components\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  Option
} = antd_es_select__WEBPACK_IMPORTED_MODULE_8___default.a;
const {
  Title
} = antd_es_typography__WEBPACK_IMPORTED_MODULE_7___default.a;
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

class Home extends react__WEBPACK_IMPORTED_MODULE_9___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onReset", objectForm => {
      this.setState({
        username: objectForm.username = ''
      });
    });

    _defineProperty(this, "onFinish", objectForm => {
      this.props.onChange(objectForm);
    });

    this.state = {
      key: '',
      username: ''
    };
  }

  componentWillMount() {
    console.log(this.props.task);
  }

  render() {
    const {
      task
    } = this.props;
    return __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
      name: "form"
    }, formItemLayout, {
      onFinish: this.onFinish,
      style: {
        background: 'white',
        display: 'block',
        width: '75%',
        // margin : '0 auto',
        padding: '30px 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }), __jsx(Title, {
      level: 2,
      style: {
        textAlign: 'center',
        marginBottom: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, "To-do-app (Designed by L\u1ED7 T\u1EA5n)"), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      label: "Name",
      name: "username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(antd_es_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
      placeholder: "Typing here...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    })), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      name: "country",
      label: "Country",
      hasFeedback: true,
      rules: [{
        required: true,
        message: 'Please select your country!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, __jsx(antd_es_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
      placeholder: "Please select a country",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, __jsx(Option, {
      value: "china",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    }, "China"), __jsx(Option, {
      value: "usa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, "U.S.A"), __jsx(Option, {
      value: "vn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, "Viet Nam"))), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      name: "color",
      label: "Color",
      hasFeedback: true,
      rules: [{
        required: true,
        message: 'Please select your color!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx(antd_es_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
      placeholder: "Please select a color",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, __jsx(Option, {
      value: "green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, "Green"), __jsx(Option, {
      value: "blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }, "Blue"), __jsx(Option, {
      value: "lightblue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }, "Lightblue"))), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      name: "gender",
      label: "Gender",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx(antd_es_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, __jsx(antd_es_radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: "male",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, "Male"), __jsx(antd_es_radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
      value: "female",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, "Female"))), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      name: "hobby",
      label: "Hobby",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(antd_es_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, __jsx(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "soccer",
      style: {
        lineHeight: '32px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, "Soccer")), __jsx(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 29
      }
    }, __jsx(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "swimming",
      style: {
        lineHeight: '32px'
      },
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }
    }, "Swimming")), __jsx(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, __jsx(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: "dance",
      style: {
        lineHeight: '32px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }, "Dance"))))), __jsx(antd_es_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      wrapperCol: {
        span: 12,
        offset: 6
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, __jsx(antd_es_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      type: "primary",
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, "Submit")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/ListTable.js":
/*!*********************************!*\
  !*** ./components/ListTable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/table */ "antd/es/table");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_es_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/space */ "antd/es/space");
/* harmony import */ var antd_es_space__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_es_space__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/tag */ "antd/es/tag");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\admin\\Pictures\\to-do-list-nextjs\\components\\ListTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// const data = []
class ListTable extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onDelete", () => {
      console.log('delete');
    });
  }

  // state ={
  //     status : 0
  // }
  // componentWillReceiveProps(previousProps){
  //     console.log(this.props.data)
  //     console.log(previousProps.data)
  //     if(this.props.data !== previousProps.data){
  //         this.setState({
  //             status : 1
  //         })
  //     }
  // }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      render: text => __jsx("p", {
        className: "table-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }
      }, text)
    }, {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      render: text => __jsx("p", {
        className: "table-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 33
        }
      }, text)
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: text => __jsx("p", {
        className: "table-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 33
        }
      }, text)
    }, {
      title: 'Color',
      key: 'color',
      dataIndex: 'color',
      render: text => __jsx("p", {
        className: "table-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, text)
    }, {
      title: 'Hobby',
      key: 'hobbies',
      dataIndex: 'hobby',
      render: hobbies => __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, hobbies.map(hobby => {
        let color = hobby.length > 5 ? 'green' : 'lightblue';
        return __jsx(antd_es_tag__WEBPACK_IMPORTED_MODULE_2___default.a, {
          color: color,
          key: hobby,
          className: "hobby-tag",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 33
          }
        }, hobby.toUpperCase());
      }))
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => __jsx(antd_es_space__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "btn-edit",
        onClick: () => this.props.onUpdate(record.key),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      }, "Edit"), __jsx("a", {
        className: "btn-delete",
        onClick: () => this.props.onDelete(record.key),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }, "Delete"))
    }];
    var {
      data
    } = this.props; //    console.log(data)

    return __jsx(antd_es_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
      key: Math.random(),
      columns: columns,
      dataSource: data,
      style: {
        display: 'block',
        width: '75%',
        margin: '0 auto',
        background: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListTable);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/layout */ "antd/es/layout");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_es_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Form */ "./components/Form.js");
/* harmony import */ var _components_ListTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListTable */ "./components/ListTable.js");

var _jsxFileName = "C:\\Users\\admin\\Pictures\\to-do-list-nextjs\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", objectForm => {
      // console.log(objectForm)
      var {
        list
      } = this.state;
      list.push(_objectSpread({}, objectForm, {
        key: list.length
      })); // console.log('h ia zai')
      // console.log('list', list)
      // var key = list.length
      // list = [...list, objectForm, key]

      this.setState({
        list: list
      });
      localStorage.setItem('LIST', JSON.stringify(this.state.list));
    });

    _defineProperty(this, "onDelete", key => {
      var {
        list
      } = this.state;
      const newList = list.filter(item => item.key !== key);
      this.setState({
        list: newList
      }, () => {
        localStorage.setItem('LIST', JSON.stringify(this.state.list));
      });
    });

    _defineProperty(this, "findIndexInList", key => {
      const {
        list
      } = this.state;
      var result = -1;
      list.forEach((listItem, index) => {
        if (listItem.key === key) {
          result = index;
        }
      });
      return result;
    });

    _defineProperty(this, "onUpdate", key => {
      var {
        list
      } = this.state;
      const index = this.findIndexInList(key);
      var taskEditing = list[index];
      this.setState({
        taskEditing: taskEditing
      });
    });

    this.state = {
      list: [],
      taskEditing: null
    };
  }

  componentDidMount() {
    var {
      list
    } = this.state;

    if (list.length === 0) {
      const data = JSON.parse(localStorage.getItem('LIST')) || [];
      this.setState({
        list: data
      });
    }
  }

  render() {
    var {
      list,
      taskEditing
    } = this.state; // console.log(list)

    return __jsx(antd_es_layout__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: this.onChange,
      task: taskEditing,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), __jsx(_components_ListTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: list,
      onDelete: this.onDelete,
      onReset: this.onReset,
      onUpdate: this.onUpdate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Pictures\to-do-list-nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/es/button":
/*!*********************************!*\
  !*** external "antd/es/button" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/button");

/***/ }),

/***/ "antd/es/checkbox":
/*!***********************************!*\
  !*** external "antd/es/checkbox" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/checkbox");

/***/ }),

/***/ "antd/es/col":
/*!******************************!*\
  !*** external "antd/es/col" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/col");

/***/ }),

/***/ "antd/es/form":
/*!*******************************!*\
  !*** external "antd/es/form" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/form");

/***/ }),

/***/ "antd/es/input":
/*!********************************!*\
  !*** external "antd/es/input" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/input");

/***/ }),

/***/ "antd/es/layout":
/*!*********************************!*\
  !*** external "antd/es/layout" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/layout");

/***/ }),

/***/ "antd/es/radio":
/*!********************************!*\
  !*** external "antd/es/radio" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/radio");

/***/ }),

/***/ "antd/es/row":
/*!******************************!*\
  !*** external "antd/es/row" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/row");

/***/ }),

/***/ "antd/es/select":
/*!*********************************!*\
  !*** external "antd/es/select" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/select");

/***/ }),

/***/ "antd/es/space":
/*!********************************!*\
  !*** external "antd/es/space" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/space");

/***/ }),

/***/ "antd/es/table":
/*!********************************!*\
  !*** external "antd/es/table" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/table");

/***/ }),

/***/ "antd/es/tag":
/*!******************************!*\
  !*** external "antd/es/tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/tag");

/***/ }),

/***/ "antd/es/typography":
/*!*************************************!*\
  !*** external "antd/es/typography" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map