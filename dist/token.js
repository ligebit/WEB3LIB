"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.tokensCache = void 0;
const ethers_1 = require("ethers");
exports.tokensCache = new Map();
class Token {
    constructor(token, saveIntoTokensCache = true) {
        token.address = token.address ? (0, ethers_1.getAddress)(token.address) : undefined;
        const savedToken = exports.tokensCache.get(token.address);
        // //load from cache
        // if(savedToken) Object.assign(this, savedToken);
        // //rewrite loaded from cache
        // Object.assign(this, token);
        Object.assign(this, savedToken);
        Object.assign(this, token);
        //save into cache
        if (saveIntoTokensCache && token.address) {
            exports.tokensCache.set(token.address, this.clone());
        }
    }
    static from(address) {
        return exports.tokensCache.get(address);
    }
    equals(other) {
        return this.address === other.address;
    }
    toString() {
        return this.symbol || this.name || this.address;
    }
    clone() {
        return new Token(JSON.parse(JSON.stringify(this)), false);
    }
    sortsBefore(other) {
        return this.address.toLowerCase() < other.address.toLowerCase();
    }
}
exports.Token = Token;
