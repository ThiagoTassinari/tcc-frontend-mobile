import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perdas',
  templateUrl: './perdas.page.html',
  styleUrls: ['./perdas.page.scss'],
})
export class PerdasPage implements OnInit {
  public folder: string = 'Perdas e Desperdícios';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
