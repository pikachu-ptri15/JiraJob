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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var LogIn = function (props) {
    var handleSubmit = function (event) {
        event.preventDefault();
        console.log('clicked me');
    };
    var _a = (0, react_1.useState)(''), username = _a[0], setUsername = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    // const supabase = useSupabaseClient();
    var handleInputChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        if (name === 'username')
            setUsername(value);
        if (name === 'password')
            setPassword(value);
    };
    return (react_1.default.createElement("div", { className: 'loginWrapper' },
        react_1.default.createElement("div", { className: 'loginCenter' },
            react_1.default.createElement("div", { className: 'loginHeader' }, "JiraJob"),
            react_1.default.createElement("div", { className: 'loginCenterInfo' },
                react_1.default.createElement("div", { className: 'loginCenterLoginHeader' }, "Login"),
                react_1.default.createElement("form", { onSubmit: handleSubmit },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("input", { type: 'text', name: 'username', placeholder: 'Username', value: username, onChange: handleInputChange, required: true, style: { borderRadius: '4px' }, className: 'field' })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("input", { type: 'password', name: 'password', placeholder: 'Password', value: password, onChange: handleInputChange, required: true, style: { borderRadius: '4px' }, className: 'field' })),
                    react_1.default.createElement("div", { className: 'field' },
                        react_1.default.createElement("button", { type: 'submit', className: 'login-btn' }, "Login")))),
            react_1.default.createElement("div", { className: 'loginNewUser' },
                react_1.default.createElement("a", { href: '/signup' }, "New User?")))));
};
exports.default = LogIn;
