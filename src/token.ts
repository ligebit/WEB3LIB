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

//add cache from chain
export let tokensCache = new Map<string, Token[]>();

export class Token<T extends IToken = IToken> implements IToken {
    symbol?: string;
    name?: string;
    decimals?: number;
    address?: string;
    chainId?: EChains;
    
    constructor(token: T, saveIntoTokensCache = true) {
        token.address = isAddress(token.address) ? getAddress(token.address) : token.address;

        const savedToken = tokensCache.get(token.address)?.find(t => t.chainId == token.chainId);

        // //load from cache
        // if(savedToken) Object.assign(this, savedToken);

        // //rewrite loaded from cache
        // Object.assign(this, token);

        Object.assign(this, savedToken);
        Object.assign(this, token);

        //save into cache
        if(saveIntoTokensCache && token.address) {
            tokensCache.set(token.address, (tokensCache.get(token.address) || []).concat([this.clone()]));
        }
    }

    static from(address: string, chainId: EChains): Token | undefined {
        return tokensCache.get(getAddress(address)).find(t => t.chainId == chainId);
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