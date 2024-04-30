import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CrosInterceptor } from './shared-files/auth-guard/cros.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: CrosInterceptor, multi: true }
  ]

};
