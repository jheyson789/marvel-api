import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
