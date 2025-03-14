import { Component, effect, OnInit, signal } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'

@Component({
  selector: 'navigation',
  imports: [
    NavigationMenuComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
    effect(() => {
      console.log(this.currentRoute())
    })
  }

  currentRoute = signal('')

  ngOnInit(): void {
    // update the current route's URL as a string if it changes
    this.router.events.subscribe((routeEvent) => {
        if (routeEvent instanceof NavigationEnd) {
          this.currentRoute.set(routeEvent.url)
        }
      },
    )
  }

}
