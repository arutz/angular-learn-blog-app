import { Routes } from '@angular/router'
import { BlogComponent } from './blog/blog.component'
import { AboutComponent } from './other/about/about.component'
import { ContactComponent } from './other/contact/contact.component'

export const routes: Routes = [
  { path: 'home', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
