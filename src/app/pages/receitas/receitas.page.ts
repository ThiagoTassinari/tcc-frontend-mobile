import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  public folder: string = 'Receitas';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
