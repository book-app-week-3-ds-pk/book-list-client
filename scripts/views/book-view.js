'use strict'

var app = app || {};

(function(module){
  var bookView={};
  bookView.initIndexPage= function(){$('.book-view').hide()
    module.Book.all.map(book => {$('#book-view').append(book.toHtml())})
  }

  module.bookView = bookView;
})(app);

$(document).ready(app.Book.fetchAll(app.bookView.initIndexPage));