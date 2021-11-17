import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filterCharacter } from '../../home/pages/interfaces/characters.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input('page') public page: number = 0;

  @Output() filter = new EventEmitter<filterCharacter>();

  constructor() {}

  ngOnInit(): void {}

  emitPagination(page: number) {
    const filter: filterCharacter = {
      offset: page <= 0 ? 0 : page,
      limit: 21,
    };
    this.filter.emit(filter);
    window.scrollTo(0, 0);
  }
}
