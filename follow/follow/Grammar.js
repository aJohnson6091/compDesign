"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grammar {
    constructor(s) {
        this.set = new Set();
        this.set2 = new Set();
        let terminalCount = 0;
        let regexCount = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "-" && s[i + 1] == ">") { //check for arrow if not add to terminal builder
                var terminalStart = i - terminalCount;
                i = i + 2; //arrow found move past arrow
                if (s[i].toUpperCase() == s[i].toLocaleLowerCase())
                    var regexStart = i;
                while (s[i] != "\n") {
                    regexCount = regexCount + 1;
                    i++;
                }
                try {
                    if (!(/^[a-zA-Z_]+$/.test(s.slice(terminalStart, terminalStart + terminalCount).trim()))) {
                        throw Error("Bad Terminal");
                    }
                    if (this.set.has([s.slice(terminalStart, terminalCount).trim(), RegExp(s.slice(regexStart, regexStart + regexCount).trim())]) || this.set2.has(s.slice(terminalStart, terminalStart + terminalCount).trim())) {
                        throw Error("Duplicate: " + s);
                    }
                    else {
                        this.set.add([s.slice(terminalStart, terminalStart + terminalCount).trim(), RegExp(s.slice(regexStart, regexStart + regexCount).trim())]);
                        this.set2.add(s.slice(terminalStart, terminalStart + terminalCount).trim());
                        //console.log("Terminal: " + s.slice(terminalStart, terminalStart + terminalCount).trim() + "  Regex: " + s.slice(regexStart, regexStart + regexCount).trim());
                        terminalCount = 0;
                        regexCount = 0;
                    }
                }
                catch (e) {
                    throw new Error("Error");
                }
            }
            else {
                terminalCount = terminalCount + 1;
            }
        }
    }
    getFirst() {
        let r = new Map();
        return r;
    }
}
exports.Grammar = Grammar;
//# sourceMappingURL=Grammar.js.map