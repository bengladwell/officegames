var Match = require('../models/match'),
    Base = require('./base');

module.exports = Base.extend({
    model: Match,
    url: '/matches'
});
module.exports.id = 'Matches';
