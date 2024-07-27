import {Route} from "@angular/router";
import {UsersListComponent} from "@rooi/feature-users-list";

export const appRoutes: Route[] = [
  {
    path: "",
    component: UsersListComponent,
    pathMatch: "full",
  },
];
