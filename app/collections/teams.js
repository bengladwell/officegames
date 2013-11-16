var Team = require('../models/team'),
    Base = require('./base');

module.exports = Base.extend({
    model: Team,
    url: '/teams'
});
module.exports.id = 'Teams';
