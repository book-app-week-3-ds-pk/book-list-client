'use strict'

var app = app || {};
let API_URL = 'http://localhost:3000';

(function(module) {

  function Book (rawDataObj) {
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.isbn = rawDataObj.isbn;
    this.image_url = rawDataObj.image_url;
    this.description = rawDataObj.description;
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());

    return template(this);
  };

  Book.loadAll = rows => {
    rows.sort((a,b) => b.title-a.title)
    rows.forEach(rows => Book.all.push(new Book(rows)))
  }

  Book.fetchAll = callback => {
    $.get(`${API_URL}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.errorCallback);
  }

  module.Book = Book;
})(app);
