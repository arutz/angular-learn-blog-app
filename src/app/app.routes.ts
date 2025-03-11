import { Routes } from '@angular/router'
import { BlogComponent } from './blog/blog.component'

export const routes: Routes = [
  { path: 'home', component: BlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
