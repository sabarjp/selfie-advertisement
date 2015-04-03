// Meteor.methods definitions

Meteor.methods({
    addCustomer: function(newCustomer){
        Customers.insert({
            firstName: newCustomer.firstName,
            lastName: newCustomer.lastName,
            suffix: newCustomer.suffix,
            phoneNumber: newCustomer.phoneNumber,
            email: newCustomer.email,
            webAddress: newCustomer.webAddress,
            notes: newCustomer.notes,
            createdAt: new Date()
        }, function(error, result){

        });
    },

    removeCustomer: function(id){
        Customers.remove(id, function(error, result){
            
        });
    },

    addSelfie: function(newSelfie){
        Selfies.insert({
            title: newSelfie.title,
            data: newSelfie.data,
            creatorId: Meteor.userId(),
            createdAt: new Date()
        }, function(error, result){

        });
    }
});