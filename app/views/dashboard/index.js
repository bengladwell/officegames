var BaseView = require('../base'),
    _ = require('underscore'),
    Backbone = require('backbone');

module.exports = BaseView.extend({

    className: 'dashboard_index_view',

    getTemplateData: function () {
        "use strict";
        var data = {
            matches: new Backbone.Collection(_.map(
                this.options.matches.toJSON(),
                function (m) {
                    return _.extend({}, m, {
                        matches_teams: _.map(
                            _.filter(
                                this.options.matches_teams.toJSON(),
                                function (mt) {
                                    return mt ? mt.match_id === m.id : false;
                                },
                                this
                            ),
                            function (mt) {
                                return _.extend({}, mt, {
                                    teams: _.map(
                                        _.filter(
                                            this.options.teams.toJSON(),
                                            function (t) {
                                                return t ? mt.team_id === t.id : false;
                                            },
                                            this
                                        ),
                                        function (t) {
                                            return _.extend({}, t, {
                                                players: _.flatten(_.map(
                                                    _.filter(
                                                        this.options.players_teams.toJSON(),
                                                        function (pt) {
                                                            return pt ? pt.team_id === t.id : false;
                                                        },
                                                        this
                                                    ),
                                                    function (pt) {
                                                        return _.filter(
                                                            this.options.players.toJSON(),
                                                            function (p) {
                                                                return p ? p.id === pt.player_id : false;
                                                            },
                                                            this
                                                        );
                                                    },
                                                    this
                                                ))
                                            });
                                        },
                                        this
                                    )
                                });
                            },
                            this
                        )
                    });
                },
                this
            ))
        };
        //console.log(data);
        return data;
    }

});
module.exports.id = 'dashboard/index';
