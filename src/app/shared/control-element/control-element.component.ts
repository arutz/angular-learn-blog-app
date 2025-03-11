import { Component, input } from '@angular/core'

@Component({
  selector: 'control-element',
  imports: [],
  templateUrl: './control-element.component.html',
  styleUrl: './control-element.component.css',
})
export class ControlElementComponent {
  label = input.required<string>()

}
