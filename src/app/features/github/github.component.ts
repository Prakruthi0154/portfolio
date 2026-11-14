import { Component, OnInit, inject } from '@angular/core';
import { GitHubService } from '../../services/github.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss',
})
export class GithubComponent implements OnInit {
  protected readonly github = inject(GitHubService);

  ngOnInit(): void {
    this.github.load();
  }

  protected languageWidth(count: number, languages: { name: string; count: number }[]): number {
    const total = languages.reduce((sum, language) => sum + language.count, 0);
    return total === 0 ? 0 : (count / total) * 100;
  }
}
