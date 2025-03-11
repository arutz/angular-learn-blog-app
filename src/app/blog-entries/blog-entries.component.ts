import { Component, inject } from '@angular/core'
import { BlogEntriesService } from '../blog-entries.service'
import { EntryComponent } from '../entry/entry.component'

export const compareDate = (date: Date, date2: Date, asc: 'asc' | 'desc' = 'asc') => {
  const result = date.getTime() == date2.getTime() ? 0 : date.getTime() > date2.getTime() ? 1 : -1
  return asc == 'asc' ? result : result * -1
}

@Component({
  selector: 'app-blog-entries',
  imports: [
    EntryComponent,
  ],
  templateUrl: './blog-entries.component.html',
  styleUrl: './blog-entries.component.css',
})
export class BlogEntriesComponent {

  private blogEntriesService = inject(BlogEntriesService)


  get entries() {
    return [...this.blogEntriesService.blogEntries()].sort((a, b) => compareDate(a.date, b.date, 'desc'))
  }

}
