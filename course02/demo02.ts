interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string, area: number} {
  let newSquare = {
    color: "red",
    area: 4
  };

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: "blue", test: 666});

interface Point1 {
  readonly x: number;
  readonly y: number;
}

let p1: Point1 = {
  x: 2,
  y: 2
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(str: string, sub: string): boolean {
  let result = str.search(sub);
  return result > -1;
}

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

class MotOkay {
  [x: string]: Dog;
  name: Dog;
}
