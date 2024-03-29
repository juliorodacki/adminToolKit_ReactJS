"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMoney = void 0;
function toMoney(money) {
    if (money === null || money === undefined) {
        return "0,00";
    }
    return money
        .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
        .replace(".", ",");
}
exports.toMoney = toMoney;
