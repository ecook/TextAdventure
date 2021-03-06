/**
 * Created by Ed on 7/29/2015.
 *
 * jslint browser: true, tolerate: messy white space, maxerr: 50,
 * indent: 4
 * globals: TEXTAPP document
 */

var TEXTAPP = {};

(function (textApp) {

    'use strict';

    textApp.newInventory = function () {
        var that = {},
            inventory = [];

        that.find = function (name) {
            var result = null;

            inventory.forEach(function (item) {
                if (name === item.name) {
                    result = item;
                }
            });

            return result;
        };

        that.look = function () {
            var result = '';

            inventory.forEach(function (item) {
                result += '<span class="inventoryNames">' + item.name + '</span><br>';
            });

            return result;
        };

        that.doActions = function () {
            var results = '';
            inventory.forEach(function (item) {
                if (item.action) {
                    results += ' ' + item.action();
                }
            });

            return results;
        };

        that.add = function (obj) {
            inventory.push(obj);
        };

        that.remove = function (obj) {
            inventory.forEach(function (item, index) {
                if (obj.name === item.name) {
                    inventory.splice(index, 1);
                }
            });
        };

        return that;
    };

    textApp.newGameObject = function (spec) {
        var that = {},
            name = (spec && spec.name) || textApp.adjectives.random(),
            description = (spec && spec.description) || '',
            inventory = TEXTAPP.newInventory(),
            location = (spec && spec.location) || null;

        that.superior = function (funcName) {
            var super_that = this,
                method = super_that[funcName];
            return function () {
                return method.apply(super_that, arguments);
            };
        };

        if (spec && spec.inventory) {
            spec.inventory.forEach(function (item) {
                inventory.add(item);
            });
        }

        that.use = function (itemName) {
            var result = '',
                obj = inventory.find(itemName);

            if (obj) {
                result = obj.use();
            } else {
                result = 'can not find ' + itemName;
            }

            return result;
        };

        that.action = function () {
            var result = '';

            return result;
        };

        that.doActions = function () {
            return inventory.doActions();
        };

        that.look = function (target) {
            if (target) {
                var obj = inventory.find(target);
                if (obj) {
                    return obj.look();
                } else {
                    return 'can not see ' + target;
                }
            } else {
                var result = inventory.look();
                if (result) {
                    return description + '<br> has: <br> ' + result;
                } else {
                    return description + '<br> has: nothing';
                }

            }
        };

        that.take = function (target) {
            var item = inventory.find(target);
            if (item) {
                inventory.remove(item);
            }

            return item;
        };

        that.drop = function (obj) {
            inventory.add(obj);
        };

        that.location = location;
        that.name = name;

        return that;
    };

}(TEXTAPP));