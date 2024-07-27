import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersFacade} from "@rooi/data-access";
import {ButtonComponent} from "@rooi/ui-kit";

@Component({
  selector: "users-list",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  private readonly usersFacade = inject(UsersFacade);
  public readonly $users = this.usersFacade.allUsers$;

  ngOnInit(): void {
    this.usersFacade.init();
    console.log(this.$users.subscribe(users => console.log(users)))
  }

  save() {
    console.log("SAVE BUTTON CLICKED")
  }
}
