"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_service_1 = require('../services/weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.query_error = false;
        this.getWeather("");
    }
    WeatherComponent.prototype.getWeather = function (city) {
        var _this = this;
        this.weatherService.getWeather(city).subscribe(function (data) {
            _this.query_error = false;
            _this.weather = data;
        }, function (err) {
            _this.query_error = true;
            _this.weather = undefined;
        });
    };
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent.prototype.search = function (text) {
        this.getWeather(text);
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'my-weather',
            templateUrl: '/app/templates/weatherLayout.html',
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map