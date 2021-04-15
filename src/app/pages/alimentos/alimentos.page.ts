import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> c8f2db6fee223d5edbde9cb1ee35b07b9596a8d3

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  public folder: string = 'Alimentos';

  constructor(private activatedRoute: ActivatedRoute) { }
>>>>>>> c8f2db6fee223d5edbde9cb1ee35b07b9596a8d3

  ngOnInit() {
  }

}
