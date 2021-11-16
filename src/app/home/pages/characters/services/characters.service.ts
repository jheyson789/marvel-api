import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _http: HttpClient) {}

  getCharacters(filter: {} = {}) {
    const params = new HttpParams().set('filter', JSON.stringify(filter));
    return this._http.get<CharacterDataWrapper>('characters', { params });
  }
}
