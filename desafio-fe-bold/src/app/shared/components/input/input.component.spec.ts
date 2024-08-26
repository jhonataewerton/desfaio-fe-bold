import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input labelText', () => {
    const mockLabelText = 'Username';
    component.labelText = mockLabelText;

    fixture.detectChanges();
    const labelElement: HTMLElement =
      fixture.nativeElement.querySelector('label');
    expect(labelElement?.textContent?.trim()).toBe(mockLabelText);
  });

  it('should display the input type', () => {
    const mockType = 'text';
    component.type = mockType;

    fixture.detectChanges();
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(inputElement.type).toBe(mockType);
  });

  it('should display the input placeholder', () => {
    const mockPlaceholder = 'Enter your username';
    component.placeholder = mockPlaceholder;

    fixture.detectChanges();
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(inputElement.placeholder).toBe(mockPlaceholder);
  });
});
