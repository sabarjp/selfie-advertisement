Router.configure({
    layoutTemplate: 'applicationLayout'
});

Router.onBeforeAction(function (){
    if(!Meteor.userId()){
        this.render('login');
    } else {
        this.next();
    }
}, {
    except: ['default', 'home', 'signup', 'login', 'password']
});

Router.route('/', function(){
    this.render('home');
}, {
    name: 'default'
});

Router.route('/home', function(){
    this.render('home');
}, {
    name: 'home'
});

Router.route('/selfies', function(){
    this.wait(Meteor.subscribe("selfies"));

    if(this.ready()){
        this.render('selfiesMain');
    } else {
        this.render('loading');
    }
}, {
    name: 'selfies'
});

Router.route('/customers', function(){
    this.wait(Meteor.subscribe("customers"));

    if(this.ready()){
        this.render('customersMain');
    } else {
        this.render('loading');
    }
}, {
    name: 'customers'
});

Router.route('/login', function(){
    if(!Meteor.userId()){
        this.render('login');
    } else {
        this.redirect('default');
    }
}, {
    name: 'login'
});

Router.route('/signup', function(){
    if(!Meteor.userId()){
        this.render('signup');
    } else {
        this.redirect('default');
    }
}, {
    name: 'signup'
});

Router.route('/password', function(){
    this.render('passwordRecovery');
}, {
    name: 'password'
});