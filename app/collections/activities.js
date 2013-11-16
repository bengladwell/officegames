var Activity = require('../models/activity'),
    Base = require('./base');

module.exports = Base.extend({
    model: Activity,
    url: '/activities'
});
module.exports.id = 'Activities';
