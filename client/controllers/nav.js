Template.nav.events({
    'click #menu': function(){
        $('#sidebar')
            .sidebar('toggle')
            .sidebar('attach events', '#sidebar .item');
    }
});