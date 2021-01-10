import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [ProfilePageRoutingModule],
  exports: [ProfilePageComponent],
})
export class ProfilePageModule {}
