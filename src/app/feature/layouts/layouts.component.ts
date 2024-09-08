import { Component } from '@angular/core';
import { VerticalLayoutComponent } from "./vertical-layout/vertical-layout.component";
import { HorizontalLayoutComponent } from "./horizontal-layout/horizontal-layout.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [VerticalLayoutComponent, HorizontalLayoutComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  public layout:'VERTICAL' | 'HORIZONTAL' = 'VERTICAL'
}
