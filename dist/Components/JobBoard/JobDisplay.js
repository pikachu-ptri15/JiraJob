"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var JobDisplay = function (_a) {
    var jobTitle = _a.jobTitle, companyName = _a.companyName, location = _a.location, notes = _a.notes;
    return (react_1.default.createElement("div", { className: "job-box" },
        react_1.default.createElement("p", { className: "company-name" }, companyName),
        react_1.default.createElement("p", { className: "job-title" }, jobTitle),
        react_1.default.createElement("p", { className: "location" }, location),
        react_1.default.createElement("p", { className: "notes" }, notes)));
};
exports.default = JobDisplay;
