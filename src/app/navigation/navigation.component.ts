import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Get the current route's URL as a string
    this.activatedRoute.url.subscribe(frag => console.log(frag))
  }

}
