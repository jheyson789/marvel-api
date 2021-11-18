import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardsComponent],
})
export class ComponentsModule {}
