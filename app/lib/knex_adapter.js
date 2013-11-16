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

        self.knex.schema.hasTable('users').then(function (exists) {
            if (!exists) {
                return self.knex.schema.createTable('users', function (table) {
                    console.log('Creating users table');
                    table.increments().primary();
                    table.string('username');
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
