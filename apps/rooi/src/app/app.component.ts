import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UsersListComponent} from "@rooi/feature-users-list"

@Component({
  standalone: true,
  imports: [RouterModule, UsersListComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "rooi";
}
