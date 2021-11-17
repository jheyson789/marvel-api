import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from './services/character.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  private characterId: number;
  public character: Character = {
    id: 0,
    name: '',
    description: '',
    modified: new Date(),
    resourceURI: '',
    urls: [],
    thumbnail: {
      extension: '',
      path: '',
    },
  };

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharacterService
  ) {
    this.characterId = Number(this._route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    this.findCharacter(this.characterId);
  }

  findCharacter(id: number) {
    this._characterService.getCharacter(id).subscribe(
      (resp) => {
        this.character = resp.data.results[0];
      },
      (err) => console.log(err)
    );
  }
}
