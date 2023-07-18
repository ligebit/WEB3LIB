"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.tokensCache = void 0;
//add cache from chain
exports.tokensCache = new Map();
class Token {
    constructor(token, saveIntoTokensCache = true) {
        token.address = token.address?.toLowerCase();
        const savedToken = exports.tokensCache.get(token.address)?.find(t => t.chainId == token.chainId);
        // //load from cache
        // if(savedToken) Object.assign(this, savedToken);
        // //rewrite loaded from cache
        // Object.assign(this, token);
        Object.assign(this, savedToken);
        Object.assign(this, token);
        //save into cache
        if (saveIntoTokensCache && token.address) {
            exports.tokensCache.set(token.address, (exports.tokensCache.get(token.address) || []).concat([this.clone()]));
        }
    }
    static from(address, chainId) {
        return exports.tokensCache.get(address.toLowerCase()).find(t => t.chainId == chainId);
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
