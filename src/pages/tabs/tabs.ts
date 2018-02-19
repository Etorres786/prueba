import { Component } from '@angular/core';
import { HomePage,CategoriasPage,OrdenesPage,BuscarPage,ClientesPage } from '../index.paginas'
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1=HomePage;
  tab2=CategoriasPage;
  tab3=OrdenesPage;
  tab4=BuscarPage;
  tab5=ClientesPage;

}
