import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly modeSignal = signal<ThemeMode>(this.getInitialMode());
  readonly mode = this.modeSignal.asReadonly();
  readonly isDark = computed(() => this.modeSignal() === 'dark');

  constructor() {
    this.applyTheme(this.modeSignal());
  }

  toggle(): void {
    const nextMode = this.isDark() ? 'light' : 'dark';
    this.modeSignal.set(nextMode);
    this.applyTheme(nextMode);
    try {
      localStorage.setItem('prakruthi-theme', nextMode);
    } catch {
      // The in-memory theme still works when storage is unavailable.
    }
  }

  private getInitialMode(): ThemeMode {
    try {
      const savedMode = localStorage.getItem('prakruthi-theme');
      if (savedMode === 'dark' || savedMode === 'light') return savedMode;
    } catch {
      return 'dark';
    }

    return 'dark';
  }

  private applyTheme(mode: ThemeMode): void {
    this.document.documentElement.dataset['theme'] = mode;
    this.document.documentElement.style.colorScheme = mode;
  }
}
