import { Component, model } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BlogCategory } from '../blog-entries.service'

export type BlogCategorySearch = BlogCategory | ''

@Component({
  selector: 'blog-search',
  imports: [
    FormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  category = model.required<BlogCategorySearch>()
  searchTerm = model.required<string | undefined>()
}
