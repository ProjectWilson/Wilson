import { Component } from '@angular/core';

import { FormPage } from '../form/form';
import { HomePage } from '../home/home';
import { BeoordelingPage } from '../beoordeling/beoordeling';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormPage;
  tab3Root = BeoordelingPage;

  constructor() {

  }

}
