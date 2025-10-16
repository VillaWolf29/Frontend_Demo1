import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-layout',
  imports: [
    MaterialModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout-componente.html',
  styleUrl: './layout-componente.css',
})
export class LayoutComponent {}
