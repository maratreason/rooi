import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app.routes";
import {provideStore, provideState} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import * as fromUsers from "@rooi/data-access";
import {UsersEffects, UsersFacade} from "@rooi/data-access";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(UsersEffects),
    provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    UsersFacade,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
  ],
};
