"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var NewJob = function (_a) {
    var addJob = _a.addJob, onClose = _a.onClose;
    var _b = (0, react_1.useState)({
        companyName: "",
        jobTitle: "",
        location: "",
        notes: "",
    }), formData = _b[0], setFormData = _b[1];
    var handleInputChange = function (e) {
        var _a;
        var _b = e.target, id = _b.id, value = _b.value;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[id] = value, _a)));
    };
    //TODO add mutiple choice field for location(remote, hybrid, on-site)
    // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({ ...formData, location: e.target.value });
    //   };
    //should all fields be required?
    var handleAddJob = function () {
        if (formData.jobTitle && formData.companyName && formData.location && formData.notes) {
            addJob(formData);
            setFormData({ jobTitle: '', companyName: '', location: '', notes: '' });
            onClose();
        }
        else {
            alert('Please fill out all fields.');
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: "companyName" }, "Company Name:"),
            react_1.default.createElement("input", { id: "companyName", type: "text", value: formData.companyName, onChange: handleInputChange, placeholder: "Enter the company name" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: "jobTitle" }, "Job Title:"),
            react_1.default.createElement("input", { id: "jobTitle", type: "text", value: formData.jobTitle, onChange: handleInputChange, placeholder: "Enter job title" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: "location" }, "Location:"),
            react_1.default.createElement("input", { id: "location", type: "text", value: formData.location, onChange: handleInputChange, placeholder: "Enter location" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: "notes" }, "Notes:"),
            react_1.default.createElement("input", { id: "notes", type: "text", value: formData.notes, onChange: handleInputChange, placeholder: "Notes" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: handleAddJob }, "Add Job"))));
};
exports.default = NewJob;
