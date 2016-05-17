"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var weather_component_1 = require('./components/weather.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
platform_browser_dynamic_1.bootstrap(weather_component_1.WeatherComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map