import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app.routes";
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {USERS_FEATURE_KEY, usersEffects, usersReducer} from "@rooi/data-access";
import {UsersFacade} from "@rooi/data-access";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(usersEffects),
    UsersFacade,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
    provideStore({
      [USERS_FEATURE_KEY]: usersReducer
    })
  ],
};
