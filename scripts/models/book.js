'use strict'

var app = app || {};
let API_URL = 'http://localhost:3000';

(function(module) {

  function Book (rawDataObj) {
    this.book_id = rawDataObj.book_id;
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

  Book.prototype.detailHtml = function () {
    let template = Handlebars.compile($('#book-detail-template').text());
    return template(this);
  }

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

  Book.fetchOne = (ctx, callback) => {
    console.log(ctx.params.book_id);
    $.get(`${API_URL}/api/v1/books/${ctx.params.book_id}`)
      .then(results => {
        results = new Book(results[0])
        callback(results);
      },
      function(err) {
        console.error(err);
      })
  }


  Book.create = callback => {
    $.post(`${API_URL}/api/v1/books`, {author: this.author, title: this.title, isbn: this.isbn, image_url: this.image_url, description: this.description })
      .then(data => {
        console.log(data);
        if (callback) callback();
      })
  }

  module.Book = Book;
})(app);
