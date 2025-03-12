import { Component, input } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

export interface NavigationMenuItem {
  label: string
  link: string
}

@Component({
  selector: 'navigation-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css',
})
export class NavigationMenuComponent {

  menuItems = input.required<NavigationMenuItem[]>()

}
