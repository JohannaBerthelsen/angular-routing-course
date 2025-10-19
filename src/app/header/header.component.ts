import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatMenuItem, MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatMenuItem,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  protected readonly pieService = inject(PieService);
  protected readonly authService = inject(AuthService);
  protected cartService = inject(CartService);

  changeCategory(category: Category) {
    this.pieService.setSelectedCategory(category);
  }
}
