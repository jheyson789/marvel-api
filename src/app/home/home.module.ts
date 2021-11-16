import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';

@NgModule({
  declarations: [HomeComponent, CharactersComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
