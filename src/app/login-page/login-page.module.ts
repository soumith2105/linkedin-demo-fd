import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [LoginPageRoutingModule, FormsModule],
    exports: [LoginPageComponent],
})
export class LoginPageModule {}
