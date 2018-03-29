'use strict';

page('/', app.bookView.initIndexPage);

page('/books/new', ctx => app.bookView.initFormView(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailView));

page();
