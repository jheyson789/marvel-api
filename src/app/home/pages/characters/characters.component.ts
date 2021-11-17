import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { Character, filterCharacter } from './interfaces/characters.interface';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];
  public count: number = 0;
  public viewSpinner = false;

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    const filter: filterCharacter = {
      limit: 21,
      offset: 0,
    };
    this.findCharacters(filter);
  }

  findCharacters(filter: filterCharacter) {
    this.viewSpinner = true;
    this.characters = [];
    this._charactersService
      .getCharacters(filter)
      .pipe(
        tap(
          () => (this.viewSpinner = false),
          () => (this.viewSpinner = false)
        )
      )
      .subscribe(
        (resp) => {
          this.characters = resp.data.results;
          this.count = Math.round(resp.data.offset / 21);
        },
        (err) => console.log(err)
      );
  }
}
