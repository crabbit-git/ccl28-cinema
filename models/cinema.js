const Cinema = function (films) {
  this.films = films;
}

Cinema.prototype.getTitles = function() {
  return this.films.map(film => film.title);
}

Cinema.prototype.findByTitle = function(filmTitle) {
  return this.films.find(film => film.title === filmTitle);
}

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.checkForYear = function(year) {
  return this.films.some(film => film.year === year);
}

module.exports = Cinema;
