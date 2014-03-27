
if (typeof Handlebars !== 'undefined' && typeof UI !== 'undefined' && typeof Spacebars !== 'undefined') {

  Handlebars.registerHelper('highlight', function () {
    var dependency = new Deps.Dependency(),
        keywords = '',
        options = this;

    return UI.Component.extend({
      parented: function () {
        var self = this;
        self.highlight = Deps.autorun(function () {
          $(self.firstNode)
            .nextAll()
            .unhighlight() // TODO: do we need this part?
            .highlight(keywords);

          dependency.depend();
        });
      },
      render: function () {
        var self = this;
        return function () {
          UI.toRawText(self.__content, self); // this triggers reactivity
          keywords = Spacebars.call(self.lookup('keywords'), options.keywords) || '';
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
