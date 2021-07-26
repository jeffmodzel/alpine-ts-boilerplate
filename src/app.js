"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alpinejs_1 = __importDefault(require("alpinejs"));
console.log('app.ts');
alpinejs_1.default.store('person', {
    title: 'Dr.',
    name: 'Bob'
});
alpinejs_1.default.start();
