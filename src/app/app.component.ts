import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Theme, ThemeType } from './shared/theme';
import { ThemeService } from './shared/theming.service';

@Component({
  selector: 'amt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  theme: Theme = ThemeType.LEMON;
  themeSubscription: Subscription | undefined;

  @HostBinding('class') get themeClass() {
    return `${this.theme}-theme`;
  }

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
  ) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.activeTheme$.subscribe((theme: Theme) => {
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      overlayContainerClasses.remove(`${this.theme}-theme`);
      this.theme = theme;
      overlayContainerClasses.add(`${this.theme}-theme`);
    });
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
