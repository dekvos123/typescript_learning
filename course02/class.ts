abstract class Animal {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  move() {
    console.log('animal move ...')
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  abstract smile(): void;
}

class Dog extends Animal {
  readonly shortName: string = "lao 2 ha"

  constructor(name: string) {
    super(name);
  }

  move() {
    console.log('dog move ...');
    super.move();
  }

  smile() {
    console.log('smile');
  }
}

const dog = new Dog("2 ha");
dog.move();
console.log(dog.name);
