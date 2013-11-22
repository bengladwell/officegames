var _ = require('underscore'),
    BaseView = require('../base');

module.exports = BaseView.extend({
    tagName: 'section',
    className: 'shared_main_view',
    getTemplateData: function () {
        "use strict";
        return _.extend({
            secondary_view: this.options.secondary_view
        }, BaseView.prototype.getTemplateData.apply(this, arguments));
    }
});
module.exports.id = 'shared/main';

