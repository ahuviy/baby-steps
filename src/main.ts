import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err))
    .then(registerServiceWorker);

function registerServiceWorker() {
    if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
        navigator.serviceWorker.register('/babysteps-sw.js');
    }
}
