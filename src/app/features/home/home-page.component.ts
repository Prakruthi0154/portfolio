import { Component, HostListener, signal } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { GithubComponent } from '../github/github.component';
import { HeroComponent } from '../hero/hero.component';
import { JourneyComponent } from '../journey/journey.component';
import { LearningComponent } from '../learning/learning.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { SiteFooterComponent } from '../../shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/components/site-header/site-header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    EducationComponent,
    GithubComponent,
    HeroComponent,
    JourneyComponent,
    LearningComponent,
    ProjectsComponent,
    SkillsComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly scrollProgress = signal(0);
  protected readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  protected updateScrollState(): void {
    const scrollableHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress.set(
      scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
    );
    this.showBackToTop.set(window.scrollY > 560);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
