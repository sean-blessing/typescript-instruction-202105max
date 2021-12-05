import { Movie } from './movie-class';

let m1: Movie = new Movie(1, "Star Wars: Episode IV", 1977, "PG", "George Lucas");
let m2: Movie = new Movie(2, "Test Movie", 1999, "R", "Test Dir");
let m3: Movie = new Movie(3, "Another Weird Movie", 2020, "PG-13", "Steven Movieman");

let movies:Movie[] = [m1, m2, m3];
let m4: Movie = new Movie(4, "4th Movie", 4444, "PG", "Another Director");
movies.push(m4);

console.log("List of movies...");
console.log("ID", "Title", "Year", "Rating", "Director");
movies.forEach(m => {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});

// other way to loop
for (let m of movies) {
    console.log("Movie title = "+m.title);
}