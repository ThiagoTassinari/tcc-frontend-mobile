import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alimentos', url: '/alimentos', icon: 'fast-food' },
    { title: 'Cadastrar', url: '/cadastro', icon: 'pencil' },
    { title: 'Receitas', url: '/receitas', icon: 'book' },
    { title: 'Estoque', url: '/estoque', icon: 'file-tray-stacked' },
    { title: 'Pedidos', url: '/pedidos', icon: 'receipt' },
    { title: 'Perdas e Desperdícios', url: '/perdas', icon: 'trash' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
