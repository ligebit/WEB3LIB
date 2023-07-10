import { EChains } from './chain';
export type IToken = {
    symbol?: string;
    name?: string;
    decimals?: number;
    address?: string;
    chainId?: EChains;
};
export declare let tokensCache: Map<string, Token<IToken>>;
export declare class Token<T extends IToken = IToken> implements IToken {
    symbol?: string;
    name?: string;
    decimals?: number;
    address?: string;
    chainId?: EChains;
    constructor(token: T, saveIntoTokensCache?: boolean);
    static from(address: string): Token | undefined;
    equals(other: Token): boolean;
    toString(): string;
    clone(): Token;
    sortsBefore(other: Token): boolean;
}
