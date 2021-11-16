import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getCharacters(filter: {} = {}) {
    const params = new HttpParams().set('filter', JSON.stringify(filter))
    return this._http.get('characters', {params})
  }
}
