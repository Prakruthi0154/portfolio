import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  protected readonly phases = [
    {
      number: '01',
      title: 'Testing fundamentals',
      description:
        'Built understanding of software development and testing lifecycles, defect management, and quality processes.',
      tag: 'FOUNDATION',
    },
    {
      number: '02',
      title: 'Hands-on practice',
      description:
        'Worked with real-world testing scenarios, test cases, and defect tracking workflows.',
      tag: 'APPLICATION',
    },
    {
      number: '03',
      title: 'Automation exploration',
      description:
        'Developed automation scripts using Selenium and TestNG while learning framework design principles.',
      tag: 'IN PROGRESS',
    },
    {
      number: '04',
      title: 'Building what’s next',
      description:
        'Working towards becoming a highly skilled QA Automation Engineer focused on scalable and reliable testing solutions.',
      tag: 'THE GOAL',
    },
  ];
}
