import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacters } from '../interfaces/characters.interface';

// TODO cambiar la posibilidad de extends o implements o inject type
export type dataCharacter = {
  count: number
  limit: number
  offset: number
  results: [ICharacters]
  total: number
}
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getCharacters(filter: {} = {}) {
    const params = new HttpParams().set('filter', JSON.stringify(filter))
    return this._http.get<{data:dataCharacter}>('characters', {params})
  }
}
