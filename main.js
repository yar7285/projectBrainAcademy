 var subscr = document.getElementsByClassName('keep_touch')[0];

subscribeModule.init({
   email:  subscr.children[1],
   button:  subscr.lastElementChild,
   sendOnEnter: true
});