import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { Character, filterCharacter } from './interfaces/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];
  public count: number = 0;

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    const filter: filterCharacter = {
      limit: 21,
      offset: 0,
    };
    this.findCharacters(filter);
  }

  findCharacters(filter: filterCharacter) {
    this._charactersService.getCharacters(filter).subscribe(
      (resp) => {
        this.characters = resp.data.results;
        this.count = Math.round(resp.data.offset / 21);
      },
      (err) => console.log(err)
    );
  }
}
