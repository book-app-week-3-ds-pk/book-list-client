'use strict'

var app = app || {};

(function(module){
  var bookView={};

  bookView.initIndexPage= function(){
    $('#book-view').empty();
    $('#book-view').show();
    $('#about-view').hide();
    $('#detail-view').hide();
    $('#form-view').hide();
    module.Book.all.map(book => {$('#book-view').append(book.toHtml())})
  }

  bookView.initDetailView = book => {
    $('#detail-view').empty();
    $('#book-view').hide();
    $('#about-view').hide();
    $('#detail-view').show();
    $('#form-view').hide();
    console.log(book);
    $('#detail-view').append(book.detailHtml());
  }

  bookView.initAboutView=function(){
    $('#book-view').hide();
    $('#about-view').show();
    $('#detail-view').hide();
    $('#form-view').hide();
  }
  bookView.initFormView=function(){
    $('#book-view').hide();
    $('#about-view').hide();
    $('#detail-view').hide();
    $('#form-view').show();
    $('#create-form').on('submit', app.Book.create);
  }

  module.bookView = bookView;
})(app);

$(document).ready(app.Book.fetchAll(app.bookView.initIndexPage));