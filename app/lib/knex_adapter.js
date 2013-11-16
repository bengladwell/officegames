"use strict";

var Knex = require('knex'),
    _ = require('underscore'),
    when = require('when'),
    path = require('path'),
    util = require('util'),
    config = require('config'),
    DataAdapter = (require('rendr/server/data_adapter'));

var KnexAdapter = function (conf) {
    if (!Knex.knex) {
        Knex.knex = Knex.initialize(conf);
    }

    this.knex = Knex.knex;
};

util.inherits(KnexAdapter, DataAdapter);

KnexAdapter.prototype.setupTables = function () {
    var self = this;
    return when.all([

        self.knex.schema.hasTable('players').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('players', function (table) {
                    console.log('Creating players table');
                    table.increments().primary();
                    table.string('name').unique();
                    table.string('email').unique();
                    table.timestamps();
                });
            }
        }),

        self.knex.schema.hasTable('teams').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('teams', function (table) {
                    console.log('Creating teams table');
                    table.increments().primary();
                    table.string('name');
                    table.timestamps();
                });
            }
        }),

        self.knex.schema.hasTable('players_teams').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('players_teams', function (table) {
                    console.log('Creating players_teams table');
                    table.increments().primary();
                    table.integer('player_id').notNullable();
                    table.integer('team_id').notNullable();
                });
            }
        }),

        self.knex.schema.hasTable('matches').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('matches', function (table) {
                    console.log('Creating matches table');
                    table.increments().primary();
                    table.integer('activity_id');
                    table.timestamps();
                });
            }
        }),

        self.knex.schema.hasTable('matches_teams').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('matches_teams', function (table) {
                    console.log('Creating matches_teams table');
                    table.increments().primary();
                    table.integer('match_id').notNullable();
                    table.integer('team_id').notNullable();
                    table.boolean('winner').notNullable();
                });
            }
        }),

        self.knex.schema.hasTable('activities').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('activities', function (table) {
                    console.log('Creating activities table');
                    table.increments().primary();
                    table.string('name');
                    table.timestamps();
                });
            }
        })

    ]);

};

KnexAdapter.prototype.request = function (req, api, options, callback) {
    /*jslint unparam:true*/

    /**
    * Allow for either 3 or 4 arguments; `options` is optional.
    */
    if (arguments.length === 3) {
        callback = options;
        options = {};
    }

    if (api.method === 'GET') {
        var table = api.path.substr(1);
        this.knex(table).select().then(_.partial(callback, null, {statusCode: 200}));
        this.knex(table).select().then(function (rows) {
            // there's gotta be a better way to create a response
            var fakeResponse = {
                statusCode: 200
            };
            callback(null, fakeResponse, rows);
        }, function (err) {
            callback(err, {statusCode: 500}, "knex error");
        });
    }

};

module.exports = KnexAdapter;
