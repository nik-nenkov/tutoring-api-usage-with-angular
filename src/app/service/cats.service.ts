import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {CatImageModel} from "../data/cat-image.model";
import {CONSTANTS} from "../util/consrtants";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) {

  }

  fetchRandomCat(): Observable<CatImageModel[]> {
    return this.httpClient.get<CatImageModel[]>("https://api.thecatapi.com/v1/images/search?limit=" + CONSTANTS.cats_per_page + "&api_key=" + CONSTANTS.cats_api_key);
  }
}
