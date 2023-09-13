let reviews: number[] = [5, 5, 4.5 ,1 ,3];

let total: number = 0

for (let index = 0; index < reviews.length; index++) {
    const element = reviews[index];
    console.log(element); 
    total += element;
}


let av: number = total/reviews.length;
console.log(`Review averege ${av}`)