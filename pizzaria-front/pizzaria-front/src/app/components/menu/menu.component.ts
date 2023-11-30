import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuTitle = 'Temporary Menu';
  menuItems = ['Home', 'About', 'Services', 'Contact'];
  activeMenuItem = 'Home';
  content = 'menu works!';

  handleMenuItemClick(item: string): void {
    this.activeMenuItem = item;
    // You can implement logic to handle the selected menu item
    console.log(`Selected menu item: ${item}`);
  }
}
