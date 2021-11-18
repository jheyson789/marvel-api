import { Component, OnInit } from '@angular/core';
import { dataMarvelCards } from './data/cards.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public dataMarvelCards = dataMarvelCards;

  constructor() {}

  ngOnInit(): void {}
}
