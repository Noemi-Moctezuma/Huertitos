import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit, OnDestroy {
  isMaximized: boolean = true;
  mobileQuery: MediaQueryList;
  titulo: string = '';
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.titulo = 'ola';
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  minimize(isMaximized: boolean) {
    let list = document.getElementsByClassName('mat-list-base');
    //minimize sidenav when clicking the button if sidenav is maximized
    if (isMaximized) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add('mat-list-minimize');
        //console.log(i);
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('mat-list-minimize');
        //console.log(i);
      }
    }
    this.isMaximized = !isMaximized;
  }
}
