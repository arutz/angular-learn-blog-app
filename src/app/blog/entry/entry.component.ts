import { Component, input } from '@angular/core'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'blog-entry',
  imports: [
    DatePipe,
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})
export class EntryComponent {
  title = input.required<string>()
  description = input.required<string>()
  user = input.required<string>()
  createdAt = input.required<Date>()
  category = input<string>('general')


}
