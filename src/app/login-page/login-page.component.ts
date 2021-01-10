import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor() {
  }

  private username = ' ';

  @Input() get getUsername(): string {
    return this.username;
  }

  set setUsername(val: string) {
    this.username = val;
    console.log(this.getUsername);
    this.changed.emit(this.getUsername);
  }

  private password = ' ';

  @Input() get getPassword(): string {
    return this.password;
  }

  set setPassword(val: string) {
    this.password = val;
    console.log(this.getPassword);
    this.changed.emit(this.getPassword);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.username = '';
  }

  log(x: any): void {
    console.log(x);
  }
}
