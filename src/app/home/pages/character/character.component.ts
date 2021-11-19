import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from './services/character.service';
import { Character } from '../interfaces/characters.interface';
import { IFeature } from '../../../shared/features/features.component';
import { tap } from 'rxjs/operators';

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
  public keys = ['comics', 'events', 'stories', 'series'];
  public features: IFeature[][] = [];

  public viewSpinner = false;

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
    this.viewSpinner = true;
    this._characterService
      .getCharacter(id)
      .pipe(
        tap(
          () => (this.viewSpinner = false),
          () => (this.viewSpinner = false)
        )
      )
      .subscribe(
        (resp) => {
          this.character = resp.data.results[0];
          this.dataFeature(this.character);
        },
        (err) => console.log(err)
      );
  }

  dataFeature(character: any) {
    this.keys.forEach((key) => {
      this.features.push(character[key].items.map((i: IFeature) => i));
    });
  }
}
