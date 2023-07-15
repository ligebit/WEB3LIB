import { ethers, getAddress, isAddress } from 'ethers'
import { EChains } from './chain';


interface Empty {}

// type IPropertiesToAdd<T extends {}> = T & {
//     on(): void
//     off(): void
// };

export type IToken = {
    symbol?: string;
    name?: string;
    decimals?: number;
    address?: string;
    chainId?: EChains;
}

export let tokensCache = new Map<string, Token>();

export class Token<T extends IToken = IToken> implements IToken {
    symbol?: string;
    name?: string;
    decimals?: number;
    address?: string;
    chainId?: EChains;
    
    constructor(token: T, saveIntoTokensCache = true) {
        token.address = isAddress(token.address) ? getAddress(token.address) : token.address;

        const savedToken = tokensCache.get(token.address);

        // //load from cache
        // if(savedToken) Object.assign(this, savedToken);

        // //rewrite loaded from cache
        // Object.assign(this, token);

        Object.assign(this, savedToken);
        Object.assign(this, token);

        //save into cache
        if(saveIntoTokensCache && token.address) {
            tokensCache.set(token.address, this.clone());
        }
    }

    static from(address: string): Token | undefined {
        return tokensCache.get(address);
    }

    equals(other: Token): boolean {
        return this.address === other.address
    }

    toString(): string {
        return this.symbol || this.name || this.address;
    }

    clone(): Token {
        return new Token<T>(JSON.parse(JSON.stringify(this)), false);
    }

    sortsBefore(other: Token): boolean {
        return this.address.toLowerCase() < other.address.toLowerCase();
    }
}