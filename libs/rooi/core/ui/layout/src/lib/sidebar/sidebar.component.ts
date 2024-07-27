import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
