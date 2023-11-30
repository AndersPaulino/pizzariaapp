import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
    });

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct menu title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Temporary Menu');
  });

  it('should render menu items', () => {
    const compiled = fixture.nativeElement;
    const menuItems = compiled.querySelectorAll('li');

    expect(menuItems.length).toEqual(component.menuItems.length);

    for (let i = 0; i < menuItems.length; i++) {
      expect(menuItems[i].textContent).toContain(component.menuItems[i]);
    }
  });

  it('should set activeMenuItem on item click', () => {
    const compiled = fixture.nativeElement;
    const menuItems = compiled.querySelectorAll('li');

    // Simulate a click on the second menu item
    menuItems[1].click();
    fixture.detectChanges();

    expect(component.activeMenuItem).toEqual(component.menuItems[1]);
  });

  it('should handleMenuItemClick method', () => {
    spyOn(component, 'handleMenuItemClick');

    const compiled = fixture.nativeElement;
    const menuItems = compiled.querySelectorAll('li');

    // Simulate a click on the third menu item
    menuItems[2].click();
    fixture.detectChanges();

    expect(component.handleMenuItemClick).toHaveBeenCalledWith(component.menuItems[2]);
  });
});
