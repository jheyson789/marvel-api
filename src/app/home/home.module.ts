import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';

@NgModule({
  declarations: [HomeComponent, CharactersComponent, CharacterComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
