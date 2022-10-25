"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryDatabase\": () => (/* binding */ queryDatabase),\n/* harmony export */   \"retrievePage\": () => (/* binding */ retrievePage)\n/* harmony export */ });\n/* harmony import */ var _notion_cms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notion-cms/client */ \"@notion-cms/client\");\n/* harmony import */ var _notion_cms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notion_cms_client__WEBPACK_IMPORTED_MODULE_0__);\nconst { Client  } = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n\nconst notion = new (_notion_cms_client__WEBPACK_IMPORTED_MODULE_0___default())({\n    auth: \"secret_Jbt9BN8bFQ1UvYFtvoUFtkCZBsEdR9XBG45UI6kYmI6\"\n});\n// Initializing a client\nconst notion1 = new Client({\n    auth: \"secret_Jbt9BN8bFQ1UvYFtvoUFtkCZBsEdR9XBG45UI6kYmI6\"\n});\nasync function queryDatabase(id, { limit =Infinity , pageSize =100  }) {\n    let pages = notion.loadDatabase(id, {});\n    // let response = await notion.databases.query({\n    //     database_id: id,\n    // });\n    // let pages = response.results;\n    // // Un-paginate\n    // while (response.has_more && pages.length < limit) {\n    //     response = await this.databases.query({\n    //         database_id: databaseId,\n    //         page_size: pageSize,\n    //         start_cursor: response.next_cursor,\n    //     });\n    //     pages = pages.concat(response.results);\n    // }\n    return pages;\n}\nasync function retrievePage(id) {\n    return notion.loadPage(id);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFrQixDQUFDO0FBQ047QUFDeEMsTUFBTUUsTUFBTSxHQUFHLElBQUlELDJEQUFNLENBQUM7SUFBRUUsSUFBSSxFQUFFLG9EQUFvRDtDQUFFLENBQUM7QUFFekYsd0JBQXdCO0FBQ3hCLE1BQU1DLE9BQU8sR0FBRyxJQUFJTCxNQUFNLENBQUM7SUFDdkJJLElBQUksRUFBRSxvREFBb0Q7Q0FDN0QsQ0FBQztBQUVLLGVBQWVFLGFBQWEsQ0FBQ0MsRUFBRSxFQUFFLEVBQUVDLEtBQUssRUFBR0MsUUFBUSxHQUFFQyxRQUFRLEVBQUcsR0FBRyxHQUFFLEVBQUU7SUFDMUUsSUFBSUMsS0FBSyxHQUFHUixNQUFNLENBQUNTLFlBQVksQ0FBQ0wsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN2QyxnREFBZ0Q7SUFDaEQsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiw4Q0FBOEM7SUFDOUMsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxJQUFJO0lBRUosT0FBT0ksS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFTSxlQUFlRSxZQUFZLENBQUNOLEVBQUUsRUFBRTtJQUNuQyxPQUFPSixNQUFNLENBQUNXLFFBQVEsQ0FBQ1AsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9ub3Rpb24uanM/YTQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZShcIkBub3Rpb25ocS9jbGllbnRcIilcbmltcG9ydCBOb3Rpb24gZnJvbSBcIkBub3Rpb24tY21zL2NsaWVudFwiO1xuY29uc3Qgbm90aW9uID0gbmV3IE5vdGlvbih7IGF1dGg6IFwic2VjcmV0X0pidDlCTjhiRlExVXZZRnR2b1VGdGtDWkJzRWRSOVhCRzQ1VUk2a1ltSTZcIiB9KTtcblxuLy8gSW5pdGlhbGl6aW5nIGEgY2xpZW50XG5jb25zdCBub3Rpb24xID0gbmV3IENsaWVudCh7XG4gICAgYXV0aDogXCJzZWNyZXRfSmJ0OUJOOGJGUTFVdllGdHZvVUZ0a0NaQnNFZFI5WEJHNDVVSTZrWW1JNlwiLFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5RGF0YWJhc2UoaWQsIHsgbGltaXQgPSBJbmZpbml0eSwgcGFnZVNpemUgPSAxMDAgfSkge1xuICAgIGxldCBwYWdlcyA9IG5vdGlvbi5sb2FkRGF0YWJhc2UoaWQsIHt9KTtcbiAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICAvLyAgICAgZGF0YWJhc2VfaWQ6IGlkLFxuICAgIC8vIH0pO1xuICAgIC8vIGxldCBwYWdlcyA9IHJlc3BvbnNlLnJlc3VsdHM7XG4gICAgLy8gLy8gVW4tcGFnaW5hdGVcbiAgICAvLyB3aGlsZSAocmVzcG9uc2UuaGFzX21vcmUgJiYgcGFnZXMubGVuZ3RoIDwgbGltaXQpIHtcbiAgICAvLyAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgLy8gICAgICAgICBkYXRhYmFzZV9pZDogZGF0YWJhc2VJZCxcbiAgICAvLyAgICAgICAgIHBhZ2Vfc2l6ZTogcGFnZVNpemUsXG4gICAgLy8gICAgICAgICBzdGFydF9jdXJzb3I6IHJlc3BvbnNlLm5leHRfY3Vyc29yLFxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQocmVzcG9uc2UucmVzdWx0cyk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVQYWdlKGlkKSB7XG4gICAgcmV0dXJuIG5vdGlvbi5sb2FkUGFnZShpZCk7XG59XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicmVxdWlyZSIsIk5vdGlvbiIsIm5vdGlvbiIsImF1dGgiLCJub3Rpb24xIiwicXVlcnlEYXRhYmFzZSIsImlkIiwibGltaXQiLCJJbmZpbml0eSIsInBhZ2VTaXplIiwicGFnZXMiLCJsb2FkRGF0YWJhc2UiLCJyZXRyaWV2ZVBhZ2UiLCJsb2FkUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/notion.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/notion */ \"./lib/notion.js\");\n/* harmony import */ var _notion_cms_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @notion-cms/react */ \"@notion-cms/react\");\n/* harmony import */ var _notion_cms_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notion_cms_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticProps() {\n    const data = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_2__.queryDatabase)(\"f532a109abd34b259c6bd1334d277ec8\", {\n        limit: Infinity,\n        pageSize: 100\n    });\n    console.log(data);\n    const page = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_2__.retrievePage)(data[0].id);\n    console.log(page);\n    return {\n        props: {\n            data,\n            page\n        }\n    };\n}\nfunction Header({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, this);\n}\nfunction HomePage({ data , page  }) {\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const { 0: likes , 1: setLikes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: p.props.Name\n                    }, p.id, false, {\n                        fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notion_cms_react__WEBPACK_IMPORTED_MODULE_3__.Blocks, {\n                blocks: page.blocks\n            }, void 0, false, {\n                fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kongdefei/Documents/Coding/playground/nextjs/3rd-examples/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUMyQjtBQUNqQjtBQUVwQyxlQUFlSSxjQUFjLEdBQUc7SUFDckMsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLDBEQUFhLENBQUMsa0NBQWtDLEVBQUU7UUFBRUssS0FBSyxFQUFFQyxRQUFRO1FBQUVDLFFBQVEsRUFBRSxHQUFHO0tBQUUsQ0FBQztJQUN4R0MsT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE1BQU1NLElBQUksR0FBRyxNQUFNVCx5REFBWSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNPLEVBQUUsQ0FBQztJQUMzQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE9BQU87UUFDTEUsS0FBSyxFQUFFO1lBQ0xSLElBQUk7WUFDSk0sSUFBSTtTQUNMO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTRyxNQUFNLENBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7SUFDekIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztBQUNwRCxDQUFDO0FBRWMsU0FBU0UsUUFBUSxDQUFDLEVBQUVaLElBQUksR0FBRU0sSUFBSSxHQUFFLEVBQUU7SUFDL0MsTUFBTU8sS0FBSyxHQUFHO1FBQUMsY0FBYztRQUFFLGNBQWM7UUFBRSxtQkFBbUI7S0FBQztJQUNuRSxNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJcEIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFckMsU0FBU3FCLFdBQVcsR0FBRztRQUNyQkQsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDRyxLQUFHOzswQkFDRiw4REFBQ1IsTUFBTTtnQkFBQ0MsS0FBSyxFQUFDLHNDQUEyQjs7Ozs7b0JBQUc7MEJBQzVDLDhEQUFDUSxJQUFFOzBCQUNBTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUNkLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzRCQUFhLENBQzFCOzs7OztvQkFDQzswQkFFTCw4REFBQ0YsSUFBRTswQkFDQWxCLElBQUksQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDRyxDQUFDLGlCQUNWLDhEQUFDRCxJQUFFO2tDQUFhQyxDQUFDLENBQUNkLEtBQUssQ0FBQ2UsSUFBSTt1QkFBbkJELENBQUMsQ0FBQ2YsRUFBRTs7Ozs0QkFBcUIsQ0FDbEM7Ozs7O29CQUNDOzBCQUVMLDhEQUFDaUIsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVCxXQUFXOztvQkFBRSxRQUFNO29CQUFDRixLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBUzswQkFDckQsOERBQUNoQixxREFBTTtnQkFBQzRCLE1BQU0sRUFBRXBCLElBQUksQ0FBQ29CLE1BQU07Ozs7O29CQUFJOzs7Ozs7WUFDM0IsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcXVlcnlEYXRhYmFzZSwgcmV0cmlldmVQYWdlIH0gZnJvbSAnLi4vbGliL25vdGlvbic7XG5pbXBvcnQgeyBCbG9ja3MgfSBmcm9tIFwiQG5vdGlvbi1jbXMvcmVhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlEYXRhYmFzZShcImY1MzJhMTA5YWJkMzRiMjU5YzZiZDEzMzRkMjc3ZWM4XCIsIHsgbGltaXQ6IEluZmluaXR5LCBwYWdlU2l6ZTogMTAwIH0pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgcGFnZSA9IGF3YWl0IHJldHJpZXZlUGFnZShkYXRhWzBdLmlkKTtcbiAgY29uc29sZS5sb2cocGFnZSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgICBwYWdlLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcbiAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRhLCBwYWdlIH0pIHtcbiAgY29uc3QgbmFtZXMgPSBbJ0FkYSBMb3ZlbGFjZScsICdHcmFjZSBIb3BwZXInLCAnTWFyZ2FyZXQgSGFtaWx0b24nXTtcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxuICAgICAgPHVsPlxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgocCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3AuaWR9PntwLnByb3BzLk5hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5MaWtlICh7bGlrZXN9KTwvYnV0dG9uPlxuICAgICAgPEJsb2NrcyBibG9ja3M9e3BhZ2UuYmxvY2tzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwicXVlcnlEYXRhYmFzZSIsInJldHJpZXZlUGFnZSIsIkJsb2NrcyIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxpbWl0IiwiSW5maW5pdHkiLCJwYWdlU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIiwiaWQiLCJwcm9wcyIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsIm5hbWVzIiwibGlrZXMiLCJzZXRMaWtlcyIsImhhbmRsZUNsaWNrIiwiZGl2IiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJwIiwiTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJibG9ja3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@notion-cms/client":
/*!*************************************!*\
  !*** external "@notion-cms/client" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@notion-cms/client");

/***/ }),

/***/ "@notion-cms/react":
/*!************************************!*\
  !*** external "@notion-cms/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@notion-cms/react");

/***/ }),

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();