"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Column = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { style: styles.column }, children);
};
var styles = {
    column: {
        flex: "1 1 calc((100% - 20px) / 3)",
        backgroundColor: "#d3d3d3",
        padding: "10px",
        borderRadius: "4px",
    },
};
exports.default = Column;
