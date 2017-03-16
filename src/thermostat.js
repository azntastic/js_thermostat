'use strict';

function Thermostat (){
  this._temperature = 20
  this._minTemperature = 10
  this._maxTemperature = 32
  this._powerSaving = true
};

Thermostat.prototype.checkCurrentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increase = function () {
  if (this._temperature <= 32) {
    this._temperature += 1;
  } else {
    return 'Maximum temperature is 32!';
  }
};

Thermostat.prototype.decrease = function() {
  if (this._temperature >= 10) {
    this._temperature -= 1;
  } else {
    return 'Minimum temperature is 10!'
  }
};
