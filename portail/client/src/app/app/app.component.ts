import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /*
  * From CH-OSM-website : app.component.ts
   */

  /*
  * FROM https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
   */
  constructor(titleService:Title, router:Router, activatedRoute:ActivatedRoute, private translate: TranslateService) {
    translate.setDefaultLang('en');
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  //use language selected
  useLanguage(language: string) {
    this.translate.use(language);
}

}
