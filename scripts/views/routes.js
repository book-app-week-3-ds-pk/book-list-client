'use strict';

page('/', app.bookView.initIndexPage);
page('/books/:book_id', app.bookView.initAboutView);
page('/books/new', app.bookView.initFormView);

page();
