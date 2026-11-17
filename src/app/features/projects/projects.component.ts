import { afterNextRender, Component, ElementRef, inject, Injector, ViewChild } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  icon: 'layers' | 'pipeline';
  summary: string;
  overview: string;
  cardImpact: string;
  badges: string[];
  features: string[];
  technicalHighlights: string[];
  impacts: string[];
  workflow: string[];
  stack: string[];
  metrics: ProjectMetric[];
  githubDescription: string;
  keywords: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChild('projectDialog') private projectDialog?: ElementRef<HTMLDialogElement>;

  private readonly injector = inject(Injector);
  protected activeProject: Project | null = null;

  protected readonly projects: Project[] = [
    {
      id: 'ecommerce-hybrid',
      title: 'Enterprise E-Commerce Hybrid UI/API Automation Framework',
      role: 'QA Automation Engineer',
      icon: 'layers',
      summary:
        'A Playwright and TypeScript framework that brings storefront journeys and service checks into one maintainable regression suite.',
      overview:
        'Designed a modular test approach for a large e-commerce platform, pairing browser-level confidence with direct REST API validation. Shared configuration and execution utilities make the suite adaptable across environments and release stages.',
      cardImpact: 'Connects critical shopping journeys with service-level checks.',
      badges: ['Playwright', 'TypeScript', 'API Testing', 'Automation', 'CI/CD', 'Docker'],
      features: [
        'Hybrid UI and API coverage',
        'Cross-browser execution',
        'Page Object Model',
        'Data-driven scenarios',
        'Parallel runs and retries',
        'Dynamic test data',
        'Environment configuration',
        'Screenshots and video capture',
        'Detailed test reports',
        'CI/CD integration',
      ],
      technicalHighlights: [
        'Modular architecture with reusable test utilities',
        'API client abstraction for service-level checks',
        'Environment-aware configuration and data handling',
        'Parallel execution with retry and artifact capture',
        'Structured reporting and logs for failure triage',
      ],
      impacts: [
        'Moves repeat regression checks into reusable automation',
        'Validates user journeys and APIs in the same release cycle',
        'Surfaces actionable failures with browser artifacts',
        'Supports more consistent release-readiness decisions',
      ],
      workflow: ['CI trigger', 'UI + API suites', 'Artifacts & reports', 'Release feedback'],
      stack: ['Playwright', 'TypeScript', 'REST APIs', 'Node.js', 'Git', 'GitHub Actions', 'Jenkins', 'Docker'],
      metrics: [
        { value: 'Compare suite runtime', label: 'Regression duration per release' },
        { value: 'Track pre-release finds', label: 'Defect discovery trend' },
        { value: 'Map critical journeys', label: 'Automated flow coverage' },
      ],
      githubDescription:
        'A scalable Playwright and TypeScript framework for e-commerce regression testing, combining cross-browser UI journeys, REST API checks, reusable page objects, data-driven scenarios, and CI-ready reporting.',
      keywords:
        'Playwright automation framework, TypeScript test automation, hybrid UI API testing, e-commerce QA, REST API testing, cross-browser testing, Page Object Model, CI/CD regression testing, Docker test automation',
    },
    {
      id: 'playwright-cicd',
      title: 'Playwright Test Automation Framework with CI/CD Pipeline',
      role: 'QA Automation Engineer',
      icon: 'pipeline',
      summary:
        'A continuous-testing setup that runs the right Playwright checks at pull-request, deployment, and scheduled regression milestones.',
      overview:
        'Built a production-oriented Playwright framework with an automated delivery pipeline, giving teams repeatable feedback throughout the development cycle. Test categories separate quick smoke checks from broader regression runs, while reports and artifacts make each execution easier to review.',
      cardImpact: 'Brings smoke and regression feedback into everyday delivery.',
      badges: ['Playwright', 'TypeScript', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Automation'],
      features: [
        'Playwright with TypeScript',
        'GitHub Actions and Jenkins pipelines',
        'Cross-browser support',
        'Parallel test execution',
        'Smoke and regression suites',
        'Test categorization',
        'Pull-request validation',
        'Deployment-triggered checks',
        'Scheduled nightly runs',
        'HTML and Allure reports',
        'Build notifications and history',
      ],
      technicalHighlights: [
        'Custom framework structure with reusable page objects',
        'Test data management and secure environment configuration',
        'Pipeline stages tailored to test category and trigger',
        'Automated report and artifact generation',
        'Report publishing and execution-history workflows',
      ],
      impacts: [
        'Provides earlier feedback on pull requests and deployments',
        'Keeps smoke checks and full regression runs purposefully distinct',
        'Reduces manual coordination around recurring test runs',
        'Makes execution outcomes easier to inspect and share',
      ],
      workflow: ['PR / schedule', 'Categorized tests', 'Reports & artifacts', 'Build notification'],
      stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'Jenkins', 'Docker', 'Allure Reports', 'Node.js'],
      metrics: [
        { value: 'Measure trigger-to-result', label: 'CI feedback time' },
        { value: 'Trend pre-merge findings', label: 'Early defect discovery' },
        { value: 'Compare manual effort', label: 'Regression workload' },
      ],
      githubDescription:
        'A Playwright and TypeScript test automation framework with CI/CD pipelines for pull-request validation, deployment checks, and scheduled regression runs, including categorized suites, browser coverage, and published reports.',
      keywords:
        'Playwright CI/CD pipeline, Jenkins test automation, GitHub Actions testing, TypeScript QA framework, automated regression testing, smoke testing, Allure reporting, nightly test execution, SDET portfolio',
    },
  ];

  protected openProject(project: Project): void {
    this.activeProject = project;
    afterNextRender(
      () => {
        this.projectDialog?.nativeElement.showModal();
      },
      { injector: this.injector },
    );
  }

  protected closeProject(): void {
    this.projectDialog?.nativeElement.close();
    this.activeProject = null;
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }

  protected onDialogCancel(event: Event): void {
    event.preventDefault();
    this.closeProject();
  }

  protected onDialogClose(): void {
    this.activeProject = null;
  }
}
