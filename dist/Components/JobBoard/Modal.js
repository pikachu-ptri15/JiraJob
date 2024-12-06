"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NewJob_1 = __importDefault(require("./NewJob"));
var Modal = function (_a) {
    var isVisible = _a.isVisible, onClose = _a.onClose, addJob = _a.addJob;
    if (!isVisible)
        return null;
    return (react_1.default.createElement("div", { style: styles.modalOverlay },
        react_1.default.createElement("div", { style: styles.modal },
            react_1.default.createElement(NewJob_1.default, { addJob: addJob, onClose: onClose }),
            react_1.default.createElement("button", { style: styles.closeButton, onClick: onClose }, "Close"))));
};
var styles = {
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
    },
    closeButton: {
        backgroundColor: "#ff3b3b",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
exports.default = Modal;
