import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly focusAreas = [
    'User authentication',
    'Search functionality',
    'Product management',
    'Cart operations',
    'Checkout process',
    'Order management',
  ];

  protected readonly contributions = [
    'Test planning',
    'Test case creation',
    'Validation strategies',
    'Defect reporting',
    'Regression testing',
  ];
}
