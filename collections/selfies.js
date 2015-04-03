Selfies.attachSchema(new SimpleSchema({
    createdAt: {
        type: Date,
        label: "Creation date"
    },

    title: {
        type: String,
        label: "Title",
        max: 100,
        optional: true
    },

    data: {
        type: String,
        label: "Data",
        max: 15000000
    },

    creatorId: {
        type: String
    }
}));

Selfies.allow({
    insert: function(userId){
        // must be logged in
        return userId !== undefined;
    },

    update: function(userId, selfie){
        //must be logged in and owner
        return userId !== undefined && userId === selfie.creatorId;
    },

    remove: function(userId, selfie){
        //must be logged in and owner
        return userId !== undefined && userId === selfie.creatorId;
    }
});