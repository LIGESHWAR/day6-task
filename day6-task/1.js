class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(Movie => Movie.rating === "PG");
    }
  }
    const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Inception", "Warner Bros", "PG-13"),
    new Movie("Toy Story", "Pixar"),
    new Movie("Finding Nemo", "Pixar", "PG"),
    new Movie("Avatar", "20th Century Fox", "PG")
  ];
  
console.log(movies);
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);  

  