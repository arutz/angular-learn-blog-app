import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { NavigationComponent } from './navigation/navigation.component'
import { EntryComponent } from './entry/entry.component'
import { FormsModule } from '@angular/forms'
import { NewEntryComponent } from './new-entry/new-entry.component'
import { BlogEntriesService } from './blog-entries.service'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationComponent, EntryComponent, FormsModule, NewEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  constructor(private blogEntriesService: BlogEntriesService) {
  }

  get entries() {
    return this.blogEntriesService.blogEntries
  }

  ngOnInit(): void {
  }
}
