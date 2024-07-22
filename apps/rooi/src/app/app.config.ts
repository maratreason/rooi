import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app.routes";
import {provideStore, provideState} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import * as fromUsers from "../../../../libs/rooi/users/data-access/src/lib/+state/users.reducer";
import {UsersEffects} from "../../../../libs/rooi/users/data-access/src/lib/+state/users.effects";
import {UsersFacade} from "../../../../libs/rooi/users/data-access/src/lib/+state/users.facade";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(UsersEffects),
    provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    UsersFacade,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
  ],
};
