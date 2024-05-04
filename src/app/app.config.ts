import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { TitleCasePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { AuthInterceptor } from './components/authendication-components/auth-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './components/authendication-components/error.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [
    // TitleCasePipe,
    provideNzI18n(en_US),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    importProvidersFrom(TitleCasePipe),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]

};
