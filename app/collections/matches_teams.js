var MatchTeam = require('../models/match_team'),
    Base = require('./base');

module.exports = Base.extend({
    model: MatchTeam,
    url: '/matches_teams'
});
module.exports.id = 'MatchesTeams';
