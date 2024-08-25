import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() firstSvgUrl = 'money';
  @Input() menuName = '';
  secondSvgUrl = 'arrow';

}
