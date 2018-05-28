function createSquare(config) {
    var newSquare = {
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
var mySquare = createSquare({ color: "blue" });
var p1 = {
    x: 2,
    y: 2
};
