import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
})
export class LearningComponent {
  protected readonly topics = [
    { title: 'Test automation frameworks', code: '01', tone: 'violet' },
    { title: 'API testing', code: '02', tone: 'blue' },
    { title: 'CI/CD integration', code: '03', tone: 'green' },
    { title: 'Selenium ecosystem', code: '04', tone: 'pink' },
    { title: 'Modern QA practices', code: '05', tone: 'blue' },
    { title: 'Agile collaboration', code: '06', tone: 'violet' },
    { title: 'Software quality engineering', code: '07', tone: 'green' },
  ];
}
