import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { NavigationComponent } from './navigation/navigation.component'
import { FormsModule } from '@angular/forms'
import { NewEntryComponent } from './new-entry/new-entry.component'
import { BlogEntriesComponent } from './blog-entries/blog-entries.component'
import { BlogCategorySearch, SearchComponent } from './search/search.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationComponent, FormsModule, NewEntryComponent, BlogEntriesComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  searchTerm = signal<string | undefined>(undefined)
  category = signal<BlogCategorySearch | undefined>('')
}
