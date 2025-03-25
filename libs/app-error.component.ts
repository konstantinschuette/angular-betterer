import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './app-error.component.html',
  standalone: true,
  styleUrls: ['./app-error.component.css']
})
export class AppErrorComponent {
  @Input() name!: string; // Expected to be a string
}
