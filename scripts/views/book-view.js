(function(module){var bookView={};
  bookView.initIndexPage= function(){$('.book-view').hide()
    Book.all.map(()=>{$('#book-list').append(this)})
  }}
$(Document).ready(Book.fetchall(bookView.initIndexPage());)(app);