import { EChains } from "./chain";
import { IToken, Token } from "./token";
export interface ITokenJSON extends IToken {
    address?: string;
    symbol?: string;
    name?: string;
    decimals?: number;
    chainId?: EChains;
    logoURI?: string;
    coingeckoId?: string;
    listedIn?: string[];
}
export declare class TokenJSON extends Token<ITokenJSON> implements ITokenJSON {
    address?: string;
    symbol?: string;
    name?: string;
    decimals?: number;
    chainId?: EChains;
    logoURI?: string;
    coingeckoId?: string;
    listedIn?: string[];
}
export declare const ALL_TOKENS: {
    [key in EChains]?: ITokenJSON[];
};
