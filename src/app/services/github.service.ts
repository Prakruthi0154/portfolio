import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, forkJoin, map, of, tap } from 'rxjs';
import { GitHubRepository, GitHubUser } from '../models/github-repository.model';

export interface GitHubPortfolioData {
  user: GitHubUser;
  repositories: GitHubRepository[];
  languages: { name: string; count: number }[];
  recentPublicEvents: number;
}

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private readonly http = inject(HttpClient);
  readonly data = signal<GitHubPortfolioData | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  load(): void {
    if (this.loading() || this.data()) return;

    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      user: this.http.get<GitHubUser>('https://api.github.com/users/Prakruthi0154'),
      repositories: this.http.get<GitHubRepository[]>(
        'https://api.github.com/users/Prakruthi0154/repos?sort=updated&per_page=100',
      ),
      recentEvents: this.http.get<unknown[]>(
        'https://api.github.com/users/Prakruthi0154/events/public?per_page=100',
      ),
    })
      .pipe(
        map(({ user, repositories, recentEvents }) => {
          const visibleRepositories = repositories
            .filter((repository) => !repository.fork)
            .sort(
              (first, second) =>
                new Date(second.updated_at).getTime() - new Date(first.updated_at).getTime(),
            )
            .slice(0, 4);
          const languages = new Map<string, number>();
          repositories.forEach((repository) => {
            if (repository.language) {
              languages.set(repository.language, (languages.get(repository.language) ?? 0) + 1);
            }
          });

          return {
            user,
            repositories: visibleRepositories,
            recentPublicEvents: recentEvents.length,
            languages: [...languages.entries()]
              .sort((first, second) => second[1] - first[1])
              .slice(0, 4)
              .map(([name, count]) => ({ name, count })),
          };
        }),
        tap((data) => this.data.set(data)),
        catchError(() => {
          this.error.set('GitHub data is temporarily unavailable. Visit the profile to see the latest work.');
          return of(null);
        }),
      )
      .subscribe({
        complete: () => this.loading.set(false),
        error: () => this.loading.set(false),
      });
  }
}
