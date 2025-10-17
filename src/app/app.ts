import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationStart, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [HeaderComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation Start');
      }
    });
  }

  onActivate(event: unknown) {
    console.log('on activate', event);
  }
}
