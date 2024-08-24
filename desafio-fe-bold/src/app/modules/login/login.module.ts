import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    SharedModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
