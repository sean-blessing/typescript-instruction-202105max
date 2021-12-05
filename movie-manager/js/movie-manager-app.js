"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_class_1 = require("./movie-class");
var m1 = new movie_class_1.Movie(1, "Star Wars: Episode IV", 1977, "PG", "George Lucas");
var m2 = new movie_class_1.Movie(2, "Test Movie", 1999, "R", "Test Dir");
var m3 = new movie_class_1.Movie(3, "Another Weird Movie", 2020, "PG-13", "Steven Movieman");
var movies = [m1, m2, m3];
var m4 = new movie_class_1.Movie(4, "4th Movie", 4444, "PG", "Another Director");
movies.push(m4);
console.log("List of movies...");
console.log("ID", "Title", "Year", "Rating", "Director");
movies.forEach(function (m) {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});
// other way to loop
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var m = movies_1[_i];
    console.log("Movie title = " + m.title);
}
