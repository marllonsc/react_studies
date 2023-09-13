var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    var element = reviews[index];
    console.log(element);
    total += element;
}
var av = total / reviews.length;
console.log("Review averege ".concat(av));
