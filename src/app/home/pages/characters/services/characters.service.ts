import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CharacterDataWrapper,
  filterCharacter,
} from '../../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _http: HttpClient) {}

  getCharacters({ offset, limit }: filterCharacter) {
    const params = new HttpParams().set('offset', offset).set('limit', limit);
    return this._http.get<CharacterDataWrapper>('characters', { params });
  }
}
