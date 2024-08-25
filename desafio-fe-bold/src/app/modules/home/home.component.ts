import { Chart, registerables } from 'chart.js';
import { Component } from '@angular/core';
import { Card } from 'src/app/shared/components/card/card.model';
import { MenuList } from 'src/app/shared/components/menu-list/menuList.model';

import { OnInit } from '@angular/core';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public config: any = {
    type: 'doughnut',
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    },
    data: {
      labels: ['Contribuição voluntária', 'Contribuição mensal'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [499.999, 200.0],
          backgroundColor: ['rgb(89,76,190)', 'rgb(226,46,111)'],
          hoverOffset: 4,
        },
      ],
    },
  };
  mockMenu: MenuList[] = [
    { firstSvgUrl: 'money', textContent: 'Ver Extrato' },
    { firstSvgUrl: 'cont-mensal', textContent: 'Contribuição Mensal' },
    { firstSvgUrl: 'cont-extra', textContent: 'Contribuição Extra' },
    { firstSvgUrl: 'doc', textContent: 'Documentos' },
    { firstSvgUrl: 'reg-trib', textContent: 'Regime de Tributação' },
    { firstSvgUrl: 'solicitar-ben', textContent: 'Solicitar Benefícios' },
    { firstSvgUrl: 'extrato-reg', textContent: 'Extrato Regressivo' },
    { firstSvgUrl: 'info', textContent: 'Informações' },
  ];
  mockCardContent: Card[] = [
    {
      textContent: 'Contribuição mensal',
      cardContent: [
        { textDescription: 'Valor da contribuição', value: 'R$ 500,00' },
        { textDescription: 'Porcentagem do salário', value: '5%' },
      ],
    },
    {
      textContent: 'Contribuição voluntária',
      cardContent: [{ textDescription: 'Valor da contribuição', value: '5%' }],
    },
  ];

  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('MyChart', this.config);
  }
}
