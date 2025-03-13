import { Component, inject, input } from '@angular/core'
import { BlogEntriesService } from '../blog-entries.service'
import { EntryComponent } from '../entry/entry.component'
import { BlogCategorySearch } from '../search/search.component'

export const compareDate = (date: Date, date2: Date, asc: 'asc' | 'desc' = 'asc') => {
  const result = date.getTime() == date2.getTime() ? 0 : date.getTime() > date2.getTime() ? 1 : -1
  return asc == 'asc' ? result : result * -1
}

@Component({
  selector: 'blog-entries',
  imports: [
    EntryComponent,
  ],
  templateUrl: './blog-entries.component.html',
  styleUrl: './blog-entries.component.css',
})
export class BlogEntriesComponent {

  category = input.required<BlogCategorySearch>()
  searchTerm = input.required<string | undefined>()

  private blogEntriesService = inject(BlogEntriesService)

  get entries() {
    let localEntries = this.blogEntriesService.blogEntries()
    if (this.category() !== '') localEntries = localEntries.filter(entry => entry.category === this.category())
    if (this.searchTerm()) localEntries = localEntries.filter(entry => entry.title.toLowerCase().includes(this.searchTerm()!.toLowerCase()))
    return [...localEntries].sort((a, b) => compareDate(a.date, b.date, 'desc'))
  }

}
