function() {
  var form = $(this);
  var fdoc = form.serializeObject();
  $$(this).app.db.saveDoc({
    created_at: new Date(),
    message: fdoc.msg,
    profile: {nickname: fdoc.nick}
    },
    {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};

