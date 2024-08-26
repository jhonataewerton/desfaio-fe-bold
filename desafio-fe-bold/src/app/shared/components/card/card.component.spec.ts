import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Card } from './card.model';
import { CardContent } from './cardContent.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input textContent', () => {
    // Arrange
    const mockTextContent = 'Sample Card Title';
    component.mockCardContent = {
      textContent: mockTextContent,
      cardContent: [], // Empty array for cardContent
    };

    // Act
    fixture.detectChanges(); // Trigger change detection

    // Assert
    const spanElement: HTMLElement = fixture.nativeElement.querySelector(
      'div.text-and-icon span'
    );
    expect(spanElement?.textContent?.trim()).toBe(mockTextContent);
  });

  it('should display the input cardContent', () => {
    // Arrange
    const mockCardContent: CardContent[] = [
      { textDescription: 'Description 1', value: 'Value 1' },
      { textDescription: 'Description 2', value: 'Value 2' },
    ];
    component.mockCardContent = {
      textContent: 'Sample Card Title',
      cardContent: mockCardContent,
    };

    fixture.detectChanges();

    const textContentElements = fixture.nativeElement.querySelectorAll(
      'div.text-content span'
    );
    expect(textContentElements.length).toBe(mockCardContent.length * 2);
    mockCardContent.forEach((content, index) => {
      const descriptionElement = textContentElements[index * 2];
      const valueElement = textContentElements[index * 2 + 1];

      expect(descriptionElement.textContent.trim()).toBe(
        content.textDescription
      );
      expect(valueElement.textContent.trim()).toBe(content.value);
    });
  });
});
