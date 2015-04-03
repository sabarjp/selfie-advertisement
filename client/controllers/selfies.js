Template.selfiesMain.events({

});

Template.selfiesMain.helpers({
    customers:  function(){
        return ['a','b','c'];
    },

    selfies: function(){
        return Selfies.find({});
    }
});