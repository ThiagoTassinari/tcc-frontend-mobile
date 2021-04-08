import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alimentos', url: '/folder/Alimentos', icon: 'fast-food' },
    { title: 'Receitas', url: '/folder/Receitas', icon: 'book' },
    { title: 'Estoque', url: '/folder/Estoque', icon: 'file-tray-stacked' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'receipt' },
    { title: 'Perdas e Desperdicios', url: '/folder/Perdas_Desperdicios', icon: 'trash' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
