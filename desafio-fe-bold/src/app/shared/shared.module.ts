import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, MenuListComponent, CardComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, HttpClientModule],
  exports: [ButtonComponent, InputComponent, MenuListComponent, CardComponent],
})
export class SharedModule {}
