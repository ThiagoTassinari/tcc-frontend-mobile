import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {
  public folder: string = 'Estoque';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
