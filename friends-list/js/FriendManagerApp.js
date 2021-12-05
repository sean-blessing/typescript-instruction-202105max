"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friend1 = new Friend_1.Friend("Dave Grohl", 52, "dave@ff.com", true);
var friend2 = new Friend_1.Friend("Stan Smiley", 44, "stan@test.com", false);
var friend3 = new Friend_1.Friend("Julie Banks", 23, "julie@julie.com", true);
var friend4 = new Friend_1.Friend("Chris Pratt", 42, "chris@marvel.com", true);
var friends = [friend1, friend2, friend3, friend4];
console.log("List of friends...");
console.log("Name", "Age", "Email", "BFF?");
friends.forEach(function (f) {
    console.log(f.name, f.age, f.email, f.bff);
});
