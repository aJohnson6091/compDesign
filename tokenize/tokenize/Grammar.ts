
export class Grammar {
    set: Set<[string, RegExp]> = new Set();
    set2: Set<string> = new Set();
    constructor(s: string) {
        let terminalCount = 0;
        let regexCount = 0;

        for (let i = 0; i < s.length; i++) {

            if (s[i] == "-" && s[i + 1] == ">") {//check for arrow if not add to terminal builder
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
                    } else {

                        this.set.add([s.slice(terminalStart, terminalStart + terminalCount).trim(), RegExp(s.slice(regexStart, regexStart + regexCount).trim())]);
                        this.set2.add(s.slice(terminalStart, terminalStart + terminalCount).trim());

                        //console.log("Terminal: " + s.slice(terminalStart, terminalStart + terminalCount).trim() + "  Regex: " + s.slice(regexStart, regexStart + regexCount).trim());

                        terminalCount = 0;
                        regexCount = 0;
                    }
                } catch (e) {
                    throw new Error("Error");

                }



            } else {
                terminalCount = terminalCount + 1;
            }
        }
    }


}
