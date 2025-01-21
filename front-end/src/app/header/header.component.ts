import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;
  /**
   * toggleSideNav
   */
  public toggleSideNav() {
    this.sidenav.toggle();
  }
}
