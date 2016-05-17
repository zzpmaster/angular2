import { bootstrap } from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather.component';

bootstrap(AppComponent);
bootstrap(WeatherComponent, [HTTP_PROVIDERS]);