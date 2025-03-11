import { Component, input } from '@angular/core'

@Component({
  selector: 'app-entry',
  imports: [],
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
