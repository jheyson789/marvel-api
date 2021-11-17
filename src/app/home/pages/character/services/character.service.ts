import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper } from '../../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private _http: HttpClient) {}

  getCharacter(id: number) {
    return this._http.get<CharacterDataWrapper>(`characters/${id}`);
  }
}
