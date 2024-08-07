import {inject} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {switchMap, catchError, of, map, mergeMap} from "rxjs";
import * as UsersActions from "./users.actions";
import * as UsersFeature from "./users.reducer";
import {ApiService} from "@core/http";
import {UsersDTO} from "../users-dto.model";
import {usersDTOAdapter} from "../users-dto.adapter";

export const usersEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    actions$.subscribe(console.log);

    return actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
        apiService.get<UsersDTO[]>("/users").pipe(
          map((users) =>
            UsersActions.loadUsersSuccess({
              // users: users.map((user: UsersDTO) => usersDTOAdapter.DTOtoEntity(user)),
              users
            })
          ),
          catchError((error) => {
            console.error("Error", error);
            return of(UsersActions.loadUsersFailure({error}));
          })
        )
      )
    );
  },
  {functional: true}
);
