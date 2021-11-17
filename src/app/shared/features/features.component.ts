import { Component, Input, OnInit } from '@angular/core';

export type IFeature = {
  resourceURI: string;
  name: string;
};

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('feature') feature: IFeature[] = [];

  constructor() {}

  ngOnInit(): void {}
}
