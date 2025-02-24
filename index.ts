//1 task
function getTime(time: number, timeLate: number): number {
  if (time + timeLate === 24) {
    return 0;
  }
  return time + timeLate;
}

//2 task
function getInicials(inicials: string): string {
  return inicials
    .split(" ")
    .map((inicial) => inicial[0].toLocaleUpperCase())
    .join(" ");
}
getInicials("Pet Kir and");

//3 task

function getLastLengthWord(line: string): number {
  const lineArray = line.split(" ");
  const lengthLastWord = lineArray[lineArray.length - 1].length;
  return lengthLastWord;
}
getLastLengthWord("jkjk jkjlkj qwer");

//4 task
//(Л1 −Л2 ) /Л1 сЛ1 >Л2 не понял формулу
function getContrast(bright1: number, bright2: number): boolean {
  return ((bright1 - bright2) / bright1) * bright1 > bright2;
}

//5 task
function validateBrackets(bracketsStroka: string): boolean {
  const stack: string[] = [];
  const bracketMap: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
    "`": "`",
  };

  for (let char of bracketsStroka) {
    if (char === "(" || char === "{" || char === "[" || char === "`") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]" || char === "`") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
