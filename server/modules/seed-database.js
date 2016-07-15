import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'bigtuna',
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Big', last: 'Tuna' }
      },
      roles: [ 'admin' ]
    },{
      username: 'secret',
      email: 'secret@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Secret', last: 'Secret' }
      },
      roles: [ 'admin' ]
    }]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}
