import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type SkillGroup = {
  title: string;
  code: string;
  level: string;
  meter: string;
  skills: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly groups: SkillGroup[] = [
    {
      title: 'Testing expertise',
      code: 'QA / 01',
      level: 'Core practice',
      meter: '82%',
      skills: [
        'Functional testing',
        'Regression testing',
        'Smoke testing',
        'Integration testing',
        'Defect reporting',
        'Test scenarios',
        'Test case design',
      ],
    },
    {
      title: 'Automation',
      code: 'QA / 02',
      level: 'Growing focus',
      meter: '68%',
      skills: [
        'Selenium WebDriver',
        'TestNG',
        'Page Object Model',
        'Data-driven testing',
        'Hybrid frameworks',
        'Maven',
        'Jenkins',
      ],
    },
    {
      title: 'Programming',
      code: 'DEV / 03',
      level: 'Building fluency',
      meter: '63%',
      skills: ['Java', 'Object-oriented programming', 'Collections', 'Exception handling'],
    },
    {
      title: 'Data & APIs',
      code: 'DATA / 04',
      level: 'Hands-on practice',
      meter: '58%',
      skills: ['SQL', 'Database validation', 'API testing', 'Postman'],
    },
    {
      title: 'Tools',
      code: 'STACK / 05',
      level: 'In my workflow',
      meter: '72%',
      skills: ['JIRA', 'Git', 'GitHub', 'Eclipse', 'IntelliJ IDEA'],
    },
  ];
}
