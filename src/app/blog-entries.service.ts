import { Injectable, signal } from '@angular/core'

export type BlogCategory = 'general' | 'tech' | 'lifestyle' | 'travel' | 'food'

export interface BlogEntry {
  id: string
  category: BlogCategory
  title: string
  excerpt: string
  author: string
  date: Date
}

@Injectable({
  providedIn: 'root',
})
export class BlogEntriesService {

  defaultBlogEntries: BlogEntry[] = [
    {
      id: '1',
      title: 'First Blog Post',
      excerpt: 'This is a brief excerpt of the first blog post...',
      author: 'John Doe',
      date: new Date('January 15, 2025'),
      category: 'general',
    },
    {
      id: '2',
      title: 'Another Interesting Article',
      excerpt: 'Here goes a summary of the second blog entry...',
      author: 'Jane Smith',
      date: new Date('January 14, 2025'),
      category: 'lifestyle',
    },
    {
      id: '3',
      title: 'Technology Trends',
      excerpt: 'Exploring the latest developments in tech...',
      author: 'Alex Johnson',
      date: new Date('January 13, 2025'),
      category: 'tech',
    },
  ]
  blogEntries = signal<BlogEntry[]>([])

  constructor() {
    const storedEntries = localStorage.getItem('blog-entries')
    this.blogEntries.set(storedEntries ? JSON.parse(storedEntries, (key: string, value: any) => {
      if (key === 'date') return new Date(value.toString())
      else return value
    }) : this.defaultBlogEntries)
  }

  save() {
    localStorage.setItem('blog-entries', JSON.stringify(this.blogEntries))
  }

  onNewEntry(entry: { title: string, description: string, category: string }) {
    this.blogEntries.update((oldVal) => [...oldVal, {
      ...entry,
      id: Math.random().toString(),
      excerpt: entry.description,
      date: new Date(),
      author: 'Max Mustermann',
      category: entry.category as BlogCategory,
    }])
    this.save()
  }
}
