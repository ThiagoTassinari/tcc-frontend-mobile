import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

  public folder: string = 'Alimentos';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
