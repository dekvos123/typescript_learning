interface Named {
  name: string;
}

class Person {
  name: string
}

let p: Named;
p = new Person();


enum EventType {
  Mouse,
  Keyboard
}

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  xLo: number;
  yLo: number;
}
interface KeyEvent extends Event {
  keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {

}

listenEvent(EventType.Mouse, (e: MouseEvent) => {
  console.log(e.xLo + ' , ' + e.yLo);
})

interface Empty<T> {}
let x: Empty<string>;
let y: Empty<number>;
x = y;
