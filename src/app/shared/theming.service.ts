import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme, ThemeType } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: Theme = ThemeType.LEMON;

  activeTheme$: BehaviorSubject<Theme> = new BehaviorSubject(this.currentTheme);

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    this.activeTheme$.next(this.currentTheme);
  }

  toggleTheme() {
    const allThemes: string[] = Object.keys(ThemeType).map((theme: string) => theme.toLowerCase());
    const currentThemeIndex: number = allThemes.indexOf(this.currentTheme.toLowerCase());
    if(currentThemeIndex > -1) {
      const nextTheme: Theme = allThemes[(currentThemeIndex + 1) % allThemes.length] as Theme;
      this.setTheme(nextTheme);
    }
  }
}
