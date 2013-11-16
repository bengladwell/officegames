var BaseClientRouter = require('rendr/client/router');

var Router = function Router(options) {
    "use strict";
    BaseClientRouter.call(this, options);
};

/**
* Set up inheritance.
*/
Router.prototype = Object.create(BaseClientRouter.prototype);
Router.prototype.constructor = BaseClientRouter;

Router.prototype.postInitialize = function () {
    "use strict";
    this.on('action:start', this.trackImpression, this);
};

Router.prototype.trackImpression = function () {
    "use strict";
    if (window._gaq) {
        window._gaq.push(['_trackPageview']);
    }
};

module.exports = Router;
