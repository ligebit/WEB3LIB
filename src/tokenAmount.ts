import { IToken, Token } from './token'

function powBigInt(base: bigint, exponent: bigint): bigint {
    return exponent <= 0n? 1n : base * powBigInt(base, --exponent);
}

export class TokenAmount<T extends Token = Token> {
    token: T;
    amount: bigint;

    constructor(token: T, amount: bigint | string | number) {
        this.amount = BigInt(amount);
        this.token = token;
    }

    getFloat(): number {
        if(this.amount == 0n) return 0;
        if(!this.token.decimals) throw new Error('decimlas not set');

        return parseInt(this.amount.toString()) / (10 ** this.token.decimals);
    }

    getFloatDecimals(): string {
        return this.getFloat().toFixed(this.token.decimals || 24);
    }

    static fromFloat(token: Token, floatAmount: number): TokenAmount {
        if(!token.decimals) throw new Error('TokenAmount.fromFloat: decimals not set');

        let stringAmount = floatAmount.toFixed(token.decimals);
        stringAmount = stringAmount.replace(',', '.');

        const wholePart = stringAmount.split('.')[0] || '0';
        const fracPart = stringAmount.split('.')[1] || '0';
        
        const amount = BigInt(wholePart) * powBigInt(10n, BigInt(token.decimals)) + BigInt(fracPart) * powBigInt(10n, BigInt(token.decimals - fracPart.length));

        // if(stringAmount != floatAmount.toString()) {
        //     console.log(floatAmount, stringAmount, floatAmount.toString());
        // }

        return new TokenAmount(token, amount);
    }

    add(other: TokenAmount): TokenAmount {
        if (!this.token.equals(other.token)) throw new Error('Tokens not equal');

        return new TokenAmount(this.token, this.amount + other.amount);
    }

    sub(other: TokenAmount): TokenAmount {
        if (!this.token.equals(other.token)) throw new Error('Tokens not equal');

        return new TokenAmount(this.token, this.amount - other.amount);
    }

    divNumber(value: number): TokenAmount {
        value = this.getFloat() / value;

        return TokenAmount.fromFloat(this.token, value);
    }

    mulNumber(value: number): TokenAmount {
        value = this.getFloat() * value;

        return TokenAmount.fromFloat(this.token, value);
    }

    subNumber(value: number): TokenAmount {
        value = this.getFloat() - value;

        return TokenAmount.fromFloat(this.token, value);
    }

    subBN(value: bigint): TokenAmount {
        value = this.amount - value;

        return new TokenAmount(this.token, value);
    }

    addNumber(value: number): TokenAmount {
        value = this.getFloat() + value;

        return TokenAmount.fromFloat(this.token, value);
    }

    addBN(value: bigint): TokenAmount {
        value = this.amount + value;

        return new TokenAmount(this.token, value);
    }

    equals(other: TokenAmount): boolean {
        return this.token.equals(other.token) && this.amount == other.amount;
    }

    clone() {
        return new TokenAmount<T>(this.token.clone() as T, this.amount.toString());
    }

    toString(): string {
        if(this.amount == 0n) return `0 ${this.token}`;

        if(!this.token.decimals) return `${this.amount} ${this.token}`;

        let string = this.getFloat().toFixed(this.token.decimals);
        let pointPos = string.indexOf('.');

        if(pointPos > 8) {
            string = this.getFloat().toFixed(0);
        } else {
            string = this.getFloat().toFixed(8 - pointPos);
        }

        return `${string} ${this.token}`;
    }


}