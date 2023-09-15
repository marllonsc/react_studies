import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let coachs: Coach[] = [];

coachs.push(myCricketCoach);
coachs.push(myGolfCoach);

for (const key of coachs) {
   console.log(key.getDailyWorkout());
}
