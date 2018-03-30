 (function(module){
  var errorView={};
  errorView.initErrorPage=function(err){
    let errorTemplate=Handlebars.compile('#error-template');
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').html('');
    $('#error-message').append(errorTemplate(err));
  }
  var errorCallback=function(err){
    console.log(err);
    errorView.initErrorPage(err);
  }
})(app);