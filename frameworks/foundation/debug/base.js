var Simulo = {
  clickOn: function(selector) {
    var pageElement;
    if (typeof selector === 'string') {
      pageElement = Simulo.PageElement.create({selector: selector});
    } else {
      pageElement = Simulo.PageElement.create({element: selector});
    }

    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.click();
    });
    SC.RunLoop.end();
    return this;
  },

  pressEnter: function(selector) {
    var pageElement = this._pageElement ? this._pageElement : Simulo.PageElement.create({selector: selector});

    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.pressEnter();
    });
    SC.RunLoop.end();
    return this;
  },

  fillIn: function(selector, value) {
    var pageElement;
    if (typeof selector === 'string') {
      pageElement = Simulo.PageElement.create({selector: selector});
    } else {
      pageElement = Simulo.PageElement.create({element: selector});
    }
    this._pageElement = pageElement;

    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.click();
      pageElement.fillInWith(value);
    });
    SC.RunLoop.end();

    return this;
  },

  select: function(selector, value) {
    var pageElement;
    if (typeof selector === 'string') {
      pageElement = Simulo.PageElement.create({selector: selector});
    } else {
      pageElement = Simulo.PageElement.create({element: selector});
    }

    SC.RunLoop.begin();
    waits(1);
    runs(function() {
      pageElement.select(value);
    });
    SC.RunLoop.end();

    return this;
  },

  check: function(selector, value) {
    var pageElement;
    if (typeof selector === 'string') {
      pageElement = Simulo.PageElement.create({selector: selector});
    } else {
      pageElement = Simulo.PageElement.create({element: selector});
    }

    waits(1);
    runs(function() {
      SC.RunLoop.begin();
      pageElement.check(value);
      SC.RunLoop.end();
    });

    return this;
  }
};
