
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('log', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello World'},
  },
  init: function() {
    // console.log(this.data.message);
    var self = this;
    this.eventHandlerFn = function () { console.log(self.data.message)};
  },

  multiple: true,

  update: function(oldData) {
    var data = this.data; // Property values
    console.log('Event: ' + data.event);
    var el = this.el; // Reference to component entity
    console.log('Element:' + el);

    if(oldData.event && data.event !== oldData.event) {
      el.removeEventListener(oldData.event, this.eventHandlerFn);
    }

    if(data.event) {
      el.addEventListener(data.event, this.eventHandlerFn);
    } else {
      console.log(data.message); // event not specified just log the message
    }
  },
  remove: function() {
    var data = this.data;
    var el = this.el;

    if(data.event) {
      el.removeEventListener(data.event, this.eventHandlerFn);
    }
  }
})

var el = document.querySelector('a-entity');
el.emit('anEvent');

setTimeout(function() {
  el.setAttribute('log', {event: 'anotherEvent', message: 'Update'});
  el.emit('anotherEvent');
}, 2000);

setTimeout(function(){
  el.removeAttribute('log');
  el.emit('anEvent');
}, 4000)