import { Component } from '@angular/core';
import { MenuList } from 'src/app/shared/components/menu-list/menuList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mockMenu: MenuList[] = [
    {firstSvgUrl: 'money', textContent: 'Ver Extrato'},
    {firstSvgUrl: 'cont-mensal', textContent: 'Contribuição Mensal'},
    {firstSvgUrl: 'cont-extra', textContent: 'Contribuição Extra'},
    {firstSvgUrl: 'doc', textContent: 'Documentos'},
    {firstSvgUrl: 'reg-trib', textContent: 'Regime de Tributação'},
    {firstSvgUrl: 'solicitar-ben', textContent: 'Solicitar Benefícios'},
    {firstSvgUrl: 'extrato-reg', textContent: 'Extrato Regressivo'},
    {firstSvgUrl: 'info', textContent: 'Informações'},
  ]

}
