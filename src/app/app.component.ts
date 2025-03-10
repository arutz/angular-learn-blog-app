import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

interface BlogEntry {
  category: string
  title: string;
  excerpt: string;
  author: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-blog-app'
  subtitle = 'musings of an angular newbie'

  blogEntries: BlogEntry[] = [
    {
      title: 'First Blog Post',
      excerpt: 'This is a brief excerpt of the first blog post...',
      author: 'John Doe',
      date: new Date('June 15, 2024'),
      category: 'general',
    },
    {
      title: 'Another Interesting Article',
      excerpt: 'Here goes a summary of the second blog entry...',
      author: 'Jane Smith',
      date: new Date('June 14, 2024'),
      category: 'general',
    },
    {
      title: 'Technology Trends',
      excerpt: 'Exploring the latest developments in tech...',
      author: 'Alex Johnson',
      date: new Date('June 13, 2024'),
      category: 'tech',
    },
  ]
}
