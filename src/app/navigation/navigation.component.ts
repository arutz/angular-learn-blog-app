import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {

  router = inject(Router)
}
