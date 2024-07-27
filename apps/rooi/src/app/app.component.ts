import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeaderComponent, SidebarComponent} from "@rooi/core/ui";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "rooi";
}
