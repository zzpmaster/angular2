import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Weather } from '../modal/weather';
import { WeatherService} from '../services/weather.service';

@Component({
    selector: 'my-weather',
    templateUrl: '/app/templates/weatherLayout.html',
    providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

    weather: Weather;

    public query_error:Boolean = false;

    constructor(private weatherService: WeatherService) {
        this.getWeather("");
    }

    getWeather(city: string) {
        this.weatherService.getWeather(city).subscribe(data => {
            this.query_error = false;
            this.weather = data;
        }, err => {
            this.query_error = true;
            this.weather = undefined;
        });
    }

    ngOnInit() {

    }

    search(text: string) {
        this.getWeather(text);
    }
}