module.exports = function (match) {
    "use strict";
    match('',                   'dashboard#index');
    match('dashboard',          'dashboard#index');
    match('players',            'players#index');
    match('teams',              'teams#index');
    match('activities',         'activities#index');
    /*match('users/:id',          'users#show');
    match('users_lazy/:id',     'users#show_lazy');*/
};
