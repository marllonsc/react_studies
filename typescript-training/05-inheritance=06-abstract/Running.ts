import { Auto } from "./Auto";
import { Boate } from "./Boate";
import { Car } from "./Car";
import { Motocicle } from "./Motocicle";

//let auto = new Auto("Auto",100,4);
let car = new Car(200,4,true);
let moto = new Motocicle(250,2,1300);
let boate = new Boate(100,200,12);

car.speedUp(100);

let list:Auto[] = [car,moto,boate];

for (const a of list) {
  console.log("------------------------------------------");
  console.log(a.info());
  console.log("------------------------------------------");
}