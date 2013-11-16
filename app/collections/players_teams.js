var PlayerTeam = require('../models/player_team'),
    Base = require('./base');

module.exports = Base.extend({
    model: PlayerTeam,
    url: '/players_teams'
});
module.exports.id = 'PlayersTeams';
