"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("./Token");
class Tokenizer {
    constructor(grammar) {
        this.grammar = grammar;
    }
    setInput(inputData) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
    }
    next() {
        //...return next token...
        //...advance this.idx...
        //...adjust this.currentLine...
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        for (let terminal of this.grammar.set.values()) {
            let sym = terminal[0];
            let rex = terminal[1];
            //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            let m = rex.exec(this.inputData); //do the search
            if (m) {
                //m[0] contains matched text as string
                console.log(m.toString());
                let lexeme = m[0];
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    this.idx++;
                    return new Token_1.Token(sym, lexeme, this.currentLine);
                }
                else {
                    //skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("No match or syntax error");
    }
}
exports.Tokenizer = Tokenizer;
//# sourceMappingURL=Tokenizer.js.map