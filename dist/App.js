"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var LogIn_1 = __importDefault(require("./Pages/LogIn"));
var SignUp_1 = __importDefault(require("./Pages/SignUp"));
var JobBoard_1 = __importDefault(require("./Pages/JobBoard"));
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(LogIn_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', element: react_1.default.createElement(SignUp_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/board', element: react_1.default.createElement(JobBoard_1.default, null) }))));
};
exports.default = App;
