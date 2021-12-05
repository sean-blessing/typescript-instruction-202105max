import { Friend } from './Friend';

let friend1:Friend = new Friend("Dave Grohl", 52, "dave@ff.com", true);
let friend2:Friend = new Friend("Stan Smiley", 44, "stan@test.com", false);
let friend3:Friend = new Friend("Julie Banks", 23, "julie@julie.com", true);
let friend4:Friend = new Friend("Chris Pratt", 42, "chris@marvel.com", true);

let friends:Friend[] = [friend1, friend2, friend3, friend4];

console.log("List of friends...");
console.log("Name", "Age", "Email", "BFF?");
friends.forEach(f => {
    console.log(f.name, f.age, f.email, f.bff);
});