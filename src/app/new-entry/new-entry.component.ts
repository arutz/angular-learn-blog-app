import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BlogEntriesService } from '../blog-entries.service'
import { ControlElementComponent } from '../shared/control-element/control-element.component'

@Component({
  selector: 'app-new-entry',
  imports: [
    FormsModule,
    ControlElementComponent,
  ],
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.css',
})
export class NewEntryComponent {
  display = signal(false)

  constructor(private blogEntriesService: BlogEntriesService) {
  }

  toggleForm() {
    this.display.update((oldVal) => !oldVal)
  }

  onNewEntry(title: string, description: string, category: string) {
    this.blogEntriesService.onNewEntry({ title, description, category })
  }
}
