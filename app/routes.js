module.exports = function (match) {
    "use strict";
    match('',                   'home#index');
    match('start',              'home#start');
    match('users',              'users#index');
    /*match('users/:id',          'users#show');
    match('users_lazy/:id',     'users#show_lazy');*/
};
