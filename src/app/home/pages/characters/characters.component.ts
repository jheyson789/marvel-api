import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { Character } from './interfaces/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    this.findCharacters();
  }

  findCharacters() {
    this._charactersService.getCharacters().subscribe(
      (resp) => {
        this.characters = resp.data.results;
        console.log(resp.data.results);
      },
      (err) => console.log(err)
    );
  }
}
