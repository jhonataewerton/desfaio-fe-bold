import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the first SVG as a mask image', () => {
    // Arrange
    const mockFirstSvgUrl = 'first';
    component.firstSvgUrl = mockFirstSvgUrl;

    fixture.detectChanges();

    const divElement: HTMLElement =
      fixture.nativeElement.querySelector('div.icon-arrow');
    expect(divElement).toBeTruthy();
    const style = window.getComputedStyle(divElement);
    const expectedMaskImageUrl = `url(./../../../assets/images/menu-list/${mockFirstSvgUrl}.svg)`;
    expect(expectedMaskImageUrl).toContain(expectedMaskImageUrl);
    expect(expectedMaskImageUrl).toContain(expectedMaskImageUrl);
  });

  it('should display the second SVG as a mask image', () => {
    const mockSecondSvgUrl = 'second';
    component.secondSvgUrl = mockSecondSvgUrl;

    fixture.detectChanges();

    const divElement: HTMLElement =
      fixture.nativeElement.querySelectorAll('div.icon-arrow')[1];
    expect(divElement).toBeTruthy();
    const style = window.getComputedStyle(divElement);
    const expectedMaskImageUrl = `url(./../../../assets/images/menu-list/${mockSecondSvgUrl}.svg)`;
    expect(expectedMaskImageUrl).toContain(expectedMaskImageUrl);
    expect(expectedMaskImageUrl).toContain(expectedMaskImageUrl);
  });

  it('should display the menuName', () => {
    const mockMenuName = 'Sample Menu';
    component.menuName = mockMenuName;

    fixture.detectChanges();

    const spanElement: HTMLElement =
      fixture.nativeElement.querySelector('span');
    expect(mockMenuName).toBe(mockMenuName);
  });
});
