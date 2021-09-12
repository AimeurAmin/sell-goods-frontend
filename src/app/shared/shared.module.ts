import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { FormHeaderComponent } from './form-header/form-header.component';



@NgModule({
  declarations: [InputComponent, SideNavComponent, ProfileAvatarComponent, NavBarComponent, CreateButtonComponent, FormHeaderComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    SideNavComponent,
    NavBarComponent,
    InputComponent
  ]
})
export class SharedModule { }
