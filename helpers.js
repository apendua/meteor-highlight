
if (typeof Handlebars !== 'undefined' && typeof UI !== 'undefined' && typeof Spacebars !== 'undefined') {

  Handlebars.registerHelper('highlight', function () {
    var dependency = new Deps.Dependency(),
        options = this;

    return UI.Component.extend({
      parented: function () {
        var self = this;
        self.highlight = Deps.autorun(function () {
          var $query = $(self.firstNode).nextAll();
          $query.unhighlight(); // TODO: do we need this part?
          $query.highlight(options.keywords);
          dependency.depend();
        });
      },
      render: function () {
        var self = this;
        return function () {
          UI.toRawText(self.__content, self); // this triggers reactivity
          dependency.changed();
          return self.__content;
        };
      },
      destroyed: function () {
        this.highlight.stop();
      },
    });
  });
}