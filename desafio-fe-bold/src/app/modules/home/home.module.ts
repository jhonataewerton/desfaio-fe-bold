import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(HOME_ROUTES), SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
