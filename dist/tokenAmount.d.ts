import { Token } from './token';
export declare class TokenAmount<T extends Token = Token> {
    token: T;
    amount: bigint;
    constructor(token: T, amount: bigint | string | number);
    getFloat(): number;
    getFloatDecimals(): string;
    static fromFloat(token: Token, floatAmount: number): TokenAmount;
    add(other: TokenAmount): TokenAmount;
    sub(other: TokenAmount): TokenAmount;
    divNumber(value: number): TokenAmount;
    mulNumber(value: number): TokenAmount;
    subNumber(value: number): TokenAmount;
    subBN(value: bigint): TokenAmount;
    addNumber(value: number): TokenAmount;
    addBN(value: bigint): TokenAmount;
    equals(other: TokenAmount): boolean;
    clone(): TokenAmount<T>;
    toString(): string;
}
