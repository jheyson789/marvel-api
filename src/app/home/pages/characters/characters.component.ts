import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters = []

  constructor(private _charactersService:CharactersService) { }

  ngOnInit(): void {
    this.findCharacters()
  }

  findCharacters(){
    this._charactersService.getCharacters().subscribe(resp => console.log(resp), err => console.log(err))
  }

}
