"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ProgressColumn_1 = __importDefault(require("../Components/JobBoard/ProgressColumn"));
var Modal_1 = __importDefault(require("../Components/JobBoard/Modal"));
var JobDisplay_1 = __importDefault(require("../Components/JobBoard/JobDisplay"));
require("../Components/JobBoard/JobDisplay.css");
var JobBoard = function () {
    var _a = (0, react_1.useState)(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var showModal = function () { return setIsModalVisible(true); };
    var hideModal = function () { return setIsModalVisible(false); };
    var _b = (0, react_1.useState)([]), jobs = _b[0], setJobs = _b[1];
    var addJob = function (newJob) {
        setJobs(__spreadArray(__spreadArray([], jobs, true), [newJob], false));
    };
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("div", { style: styles.topSpace }),
        react_1.default.createElement("div", { style: styles.buttonContainer },
            react_1.default.createElement("button", { style: styles.modalButton, onClick: showModal }, "Open Modal")),
        react_1.default.createElement(Modal_1.default, { isVisible: isModalVisible, onClose: hideModal, addJob: addJob }),
        react_1.default.createElement("div", { style: styles.columnsContainer },
            react_1.default.createElement(ProgressColumn_1.default, null,
                react_1.default.createElement("h1", null, "Applied"),
                react_1.default.createElement("div", { className: "job-list" }, jobs.map(function (job, index) { return (react_1.default.createElement(JobDisplay_1.default, { key: index, companyName: job.companyName, jobTitle: job.jobTitle, location: job.location, notes: job.notes })); }))),
            react_1.default.createElement(ProgressColumn_1.default, null,
                react_1.default.createElement("h1", null, "Interviewing")),
            react_1.default.createElement(ProgressColumn_1.default, null,
                react_1.default.createElement("h1", null, "Outcome"))),
        react_1.default.createElement("div", { style: styles.bottomSpace })));
};
var styles = {
    container: {
        display: "flex", // Flexbox layout to stack items vertically
        flexDirection: "column", // Stack items in a column
        height: "100vh", // Full screen height
        margin: "0", // Remove margin
    },
    topSpace: {
        height: "20%", // Top white space takes up 20% of the screen height
        backgroundColor: "white", // Make it white
    },
    buttonContainer: {
        position: "absolute",
        top: "12%", // Adjust this to be higher if needed
        left: "2%", // 2% white space from the left edge of the screen
    },
    modalButton: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
    },
    columnsContainer: {
        display: "flex", // Flexbox layout to arrange columns horizontally
        justifyContent: "space-between", // Space columns evenly
        alignItems: "stretch", // Ensure columns stretch to the same height
        width: "96%", // Columns container takes up 96% of the screen width
        margin: "0 auto", // Center the columns container horizontally
        flex: "1", // Take up the remaining space (after the top and bottom white spaces)
        gap: "10px", // Space between columns
    },
    bottomSpace: {
        height: "5%", // Bottom white space takes up 5% of the screen height
        backgroundColor: "white", // Make it white
    },
    item: {
        padding: "10px", // Padding for items inside the columns
        backgroundColor: "#e0e0e0", // Background color for items
        borderRadius: "4px", // Border radius for item styling
        textAlign: "center", // Center the text inside items
        marginBottom: "10px", // Adds 10px space between items inside each column
    },
};
exports.default = JobBoard;
