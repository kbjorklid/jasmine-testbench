
var calc = function calc(input) {
    if (input === "") {
        return 0;
    }
    var split = input.split(",");
    var result = 0;
    for (var i = 0; i < split.length; ++i) {
        result += parseInt(split[i]);
    }
    return result;
}
