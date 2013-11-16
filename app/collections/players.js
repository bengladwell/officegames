var Player = require('../models/player'),
    Base = require('./base');

module.exports = Base.extend({
    model: Player,
    url: '/players'
});
module.exports.id = 'Players';
