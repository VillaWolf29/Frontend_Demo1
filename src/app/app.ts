import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './pages/layout-componente/layout-componente';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('constructapp_frontend');
}
