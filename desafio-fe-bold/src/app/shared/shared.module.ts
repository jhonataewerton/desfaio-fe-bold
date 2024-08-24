import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, HttpClientModule],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}
