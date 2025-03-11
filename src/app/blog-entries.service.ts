import { Injectable } from '@angular/core'

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
  blogEntries: BlogEntry[] = []

  constructor() {
    const storedEntries = localStorage.getItem('blog-entries')
    this.blogEntries = storedEntries ? JSON.parse(storedEntries) : this.defaultBlogEntries
  }

  save() {
    localStorage.setItem('blog-entries', JSON.stringify(this.blogEntries))
  }

  onNewEntry(entry: { title: string, description: string, category: string }) {
    this.blogEntries.push({
      ...entry,
      id: Math.random().toString(),
      excerpt: entry.description,
      date: new Date(),
      author: 'Max Mustermann',
      category: entry.category as BlogCategory,
    })
    this.save()
  }
}
