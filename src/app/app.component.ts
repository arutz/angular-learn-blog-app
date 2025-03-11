import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { NavigationComponent } from './navigation/navigation.component'
import { EntryComponent } from './entry/entry.component'

export type BlogCategory = 'general' | 'tech' | 'lifestyle' | 'travel' | 'food'

interface BlogEntry {
  id: string
  category: BlogCategory
  title: string
  excerpt: string
  author: string
  date: Date
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationComponent, EntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  blogEntries: BlogEntry[] = [
    {
      id: '1',
      title: 'First Blog Post',
      excerpt: 'This is a brief excerpt of the first blog post...',
      author: 'John Doe',
      date: new Date('June 15, 2024'),
      category: 'general',
    },
    {
      id: '2',
      title: 'Another Interesting Article',
      excerpt: 'Here goes a summary of the second blog entry...',
      author: 'Jane Smith',
      date: new Date('June 14, 2024'),
      category: 'lifestyle',
    },
    {
      id: '3',
      title: 'Technology Trends',
      excerpt: 'Exploring the latest developments in tech...',
      author: 'Alex Johnson',
      date: new Date('June 13, 2024'),
      category: 'tech',
    },
  ]

}
