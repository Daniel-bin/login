import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "my-username-field",
  templateUrl: "./username-field.component.html",
  styleUrls: ["./username-field.component.css"]
})
export class UsernameField {
  @Output() username = new EventEmitter();
  change(event) {
    console.log("username Event: " + event.target.value);
    this.username.emit(event.target.value);
  }
}
