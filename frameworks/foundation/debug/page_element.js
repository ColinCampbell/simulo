sc_require('debug/base');
sc_require('debug/keyboard_string');

Simulo.PageElement = SC.Object.extend({
  init: function() {
    sc_super();

    var element = this.get('element');

    if (element === undefined) {
      if (this.get('selector') === undefined) {
        throw new Error('ERROR: PageElement expected an element or a selector, but none was given');
      }

      element = SC.CoreQuery(this.get('selector'));
      this.set('element', element);
    }

    if (element instanceof HTMLElement) {
      element = $(element);
      this.set('element', element);
    }

    if (element.length === 0) {
      throw new Error('ERROR: Could not find ' + this.get('selector') + ' on the page');
    }

    if (element.length > 1) {
      throw new Error('ERROR: Page has multiple elements that match ' + this.get('selector'));
    }
  },

  click: function() {
    SC.Event.trigger(this.get('element'), 'mouseover');
    SC.Event.trigger(this.get('element'), 'mousedown');
    SC.Event.trigger(this.get('element'), 'focus');
    SC.Event.trigger(this.get('element'), 'mouseup');
    return this;
  },

  fillInWith: function(value) {
    if(value == undefined) throw new Error('ERROR: No value was given to fill in the element with');
    Simulo.KeyboardString.create({baseString: value, target: this.get('element')}).triggerEvents();
    return this;
  },

  pressEnter: function() {
    Simulo.KeyboardEvent.create({commandKey: 'enter', target: this.get('element')}).trigger();
    return this;
  },

  select: function(item) {
    this.get('element').val(item);
    this.get('element').trigger('change');
    return this;
  },

  check: function(item) {
    this.get('element').attr('checked', 'checked');
    this.get('element').trigger('change');
    return this;
  }

});
