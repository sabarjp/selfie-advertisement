Template.selfieUpload.events({
    'change #selfie-file': function(event, template){
        // image preview function

        var input = template.$('#selfie-file');
        var file = input[0].files[0];

        if(file === undefined){
            template.$('#selfie-preview').hide();
            return false;
        }

        var reader = new FileReader();

        reader.onload = function(e){
            template.$('#selfie-preview').attr('src', 
                e.target.result);
            template.$('#selfie-preview').show();
        }

        reader.readAsDataURL(file);
    },

    'submit #selfie-upload-form': function(event, template){
        event.preventDefault();

        var input = template.$('#selfie-file');
        var file = input[0].files[0];

        if(file === undefined){
            Session.set('addSelfieError', 'No file specified.');
            return false;
        }

        var reader = new FileReader();

        reader.onload = function(e){
            var newSelfie = {
                title: "This is a test!",
                data: e.target.result
            };

            Meteor.call("addSelfie", newSelfie, function(error){
                if(error !== undefined){
                    // this is bad
                    console.log(error.reason);
                } else {
                    // clear form
                    template.$('form')[0].reset();
                    template.$('#selfie-preview').hide();
                    Session.set('addSelfieError', null);
                }
            });

            $('.page.dimmer:first').dimmer('hide');
        }

        $('.page.dimmer:first').dimmer('show');
        reader.readAsDataURL(file);
    }
});

Template.selfieUpload.helpers({
    addSelfieError: function(){
        return Session.get('addSelfieError');
    }
});