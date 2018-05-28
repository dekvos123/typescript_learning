function identity<T>(arg: T): T {
  return arg;
}

interface GenericIdentity {
  <T>(arg: T): T;
}

let myIdentity: GenericIdentity = identity;

class Animal {
  numLegs: number;
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new() => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
