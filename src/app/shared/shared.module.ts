import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PaginationComponent,
    SpinnerComponent,
    FeaturesComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    HeaderComponent,
    PaginationComponent,
    SpinnerComponent,
    FeaturesComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
