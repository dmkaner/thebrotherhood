const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/', {
  action() {
    FlowRouter.go( '/landing' );
  }
});

publicRoutes.route( '/landing', {
  name: 'landing',
  action() {
    BlazeLayout.render( 'default', { yield: 'landing' } );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});
