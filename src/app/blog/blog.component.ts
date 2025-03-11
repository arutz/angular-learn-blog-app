import { Component, signal } from '@angular/core'
import { BlogEntriesComponent } from './blog-entries/blog-entries.component'
import { NewEntryComponent } from './new-entry/new-entry.component'
import { BlogCategorySearch, SearchComponent } from './search/search.component'

@Component({
  selector: 'app-blog',
  imports: [
    BlogEntriesComponent,
    NewEntryComponent,
    SearchComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  searchTerm = signal<string | undefined>(undefined)
  category = signal<BlogCategorySearch | undefined>('')
}
