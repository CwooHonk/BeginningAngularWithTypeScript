import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/Intro/app.module';
//import { AppModule } from './app/Forms/app.module';
//import { AppModule } from './app/Login/app.module';
//import { AppModule } from './app/Search/app.module';
import { AppModule } from './app/GitHub/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
