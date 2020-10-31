import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "my-password-field",
  templateUrl: "./password-field.component.html",
  styleUrls: ["./password-field.component.css"]
})
export class PasswordField {
  @Output() password = new EventEmitter();
  change(event) {
    console.log("password Event: " + event.target.value);
    this.password.emit(event.target.value);
  }
}
