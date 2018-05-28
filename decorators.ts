function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(descriptor)
  };
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }

  @configurable(false)
  get y() { return this._y; }
}

let p2 = new Point(1, 2);
console.log(p2.x);
