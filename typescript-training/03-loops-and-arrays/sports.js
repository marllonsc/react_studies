var sports = ["Golf", "Soccer", "NBA", "Tennis"];
for (var index = 0; index < sports.length; index++) {
    var element = sports[index];
    //console.log(element);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var one = sports_1[_i];
    if ("Soccer" == one)
        console.log(one + " My favorite sport!");
    else
        console.log(one);
}
