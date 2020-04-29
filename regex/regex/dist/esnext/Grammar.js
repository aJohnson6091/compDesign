export class Grammar {
    constructor(s) {
        this.set = new Set();
        for (let i = 0; i < s.length; i++) {
            let terminalCount = 0;
            let regexCount = 0;
            if (s[i] == "-" && s[i + 1] == ">") { //check for arrow if not add to terminal builder
                var terminalStart = i - terminalCount;
                i = i + 2; //arrow found move past arrow
                var regexStart = i;
                while (s[i] != "\n") {
                    regexCount = regexCount + 1;
                    i++;
                }
                if (this.set.has([s.slice(terminalStart, terminalCount).trim(), RegExp(s.slice(regexStart, regexCount).trim())])) {
                    throw Error("Duplicate: " + s);
                }
                else {
                    this.set.add([s.slice(terminalStart, terminalCount).trim(), RegExp(s.slice(regexStart, regexCount).trim())]);
                }
            }
            else {
                terminalCount = terminalCount + 1;
                regexCount = regexCount + 1;
            }
        }
    }
}
//# sourceMappingURL=Grammar.js.map