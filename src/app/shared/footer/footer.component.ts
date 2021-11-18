import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faGitlab = faGitlab;
  public faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
