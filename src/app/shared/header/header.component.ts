import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public faBars = faBars;
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  changeStatus() {
    const isInView = this.sidebar.nativeElement.classList.contains(
      'animate__fadeInDown'
    );

    if (isInView) {
      this.renderer.addClass(this.sidebar.nativeElement, 'animate__fadeOutUp');
      this.renderer.removeClass(
        this.sidebar.nativeElement,
        'animate__fadeInDown'
      );
    } else {
      this.renderer.addClass(this.sidebar.nativeElement, 'animate__fadeInDown');
      this.renderer.removeClass(
        this.sidebar.nativeElement,
        'animate__fadeOutUp'
      );
    }
  }
}
