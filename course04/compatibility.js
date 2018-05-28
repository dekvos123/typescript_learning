var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
}
listenEvent(EventType.Mouse, function (e) {
    console.log(e.xLo + ' , ' + e.yLo);
});
var x;
var y;
x = y;
