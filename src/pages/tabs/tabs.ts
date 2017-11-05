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

}
