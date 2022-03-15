import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Jenny";
  count = 8675309;
  userNameFormControl = new FormControl(this.userName, [Validators.required]);
  onClick = () => {
    this.userName = this.userNameFormControl.value
  }

  onSaveName = () => {
    this.count++
  }
}
