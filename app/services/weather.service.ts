import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Weather } from "../modal/weather";

@Injectable()
export class WeatherService {

    private weatherURL: string = 'http://wthrcdn.etouch.cn/weather_mini?city=';
    //private weatherURL: string = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100';

    constructor(private http: Http) {

    }

    getWeather(city: string): Observable<Weather> {

        var searchCity = city === "" ? "北京" : city;

        return this.http.get(this.weatherURL + searchCity)
                         //.map(this.extractData)
                        .map(function (res: Response) {
                            let body = res.json();
                            if (body.desc !== "OK") {
                                return Observable.throw("status is error");
                            } else {
                                return body.data;
                            }
                        })
                        .catch(this.handleError);
    }

    private extractData(res: Response) {

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();
        return body.data || { };

    }

    private handleError (error: any) {

        let errMsg = error.message || 'Service error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}