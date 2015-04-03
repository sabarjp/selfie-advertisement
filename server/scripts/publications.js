Meteor.publish("customers", function(){
    return Customers.find();
});

// Only publish user's selfies
Meteor.publish("selfies", function(){
    return Selfies.find({
        creatorId: this.userId
    });
});