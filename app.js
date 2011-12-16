window.MyApp = Ember.Application.create({
  rootElement: 'body'
}); 

MyApp.president = Ember.Object.create({

  firstName: "Barack",
  lastName: "Obama",
 
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')

});

MyApp.president.addObserver('fullName', function(){
  console.log('fullName observer');
});

setTimeout(function(){
  MyApp.president.set('firstName', 'Edward');
  setTimeout(function(){
    MyApp.president.set('firstName', 'Edward James');
    setTimeout(function(){
      view.append();
    }, 600);
  }, 600);
}, 600);

var view = Ember.View.create({
  templateName: '_template', 
  name: 'Edward'
});

