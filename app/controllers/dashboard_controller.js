module.exports = {
    index: function (params, callback) {
        "use strict";
        var spec = {
            matches: {collection: 'matches', params: params},
            matches_teams: {collection: 'matches_teams', params: params},
            teams: {collection: 'teams', params: params},
            players_teams: {collection: 'players_teams', params: params},
            players: {collection: 'players'}
        };
        this.app.fetch(spec, function (err, result) {
            callback(err, result);
        });
    }
};
