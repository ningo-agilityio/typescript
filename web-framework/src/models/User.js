"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
        this.events = {};
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    User.prototype.on = function (eventName, callback) {
        var handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    return User;
}());
exports.User = User;
