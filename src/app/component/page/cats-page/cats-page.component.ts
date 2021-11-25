import {Component, OnInit} from '@angular/core';

import {CatsService} from "../../../service/cats.service";
import {CatImageModel} from "../../../data/cat-image.model";

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss']
})
export class CatsPageComponent implements OnInit {
  public cats?: CatImageModel[];

  constructor(private catsService: CatsService) {
  }

  ngOnInit(): void {
    this.changeImage('');
  }

  changeImage(itemId: string) {
    console.log(itemId);
    this.catsService.fetchRandomCat().subscribe(result => {this.cats = result;console.log(this.cats)});
  }
}
