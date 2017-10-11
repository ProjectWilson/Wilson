import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FormPage } from '../form/form';
import { FormDBPage } from '../gesprekDB/gesprekDB';
import { BeoordelingPage } from '../beoordeling/beoordeling';
import { BeoordelingDBPage } from '../beoordelingDB/beoordelingDB';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormPage;
  tab3Root = FormDBPage;
  tab4Root = BeoordelingPage;
  tab5Root = BeoordelingDBPage;

  constructor() {

  }

  gesprekformOnLoad() {
    document.getElementById('backButton').style.visibility = 'hidden';
    document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = document.getElementById('textarea-slide').offsetHeight - document.getElementById('btnSendHeight').offsetHeight - document.getElementById('footer-tabs').getElementsByTagName('div')[0].offsetHeight + 'px';
  }

}
