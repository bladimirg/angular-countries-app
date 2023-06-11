import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing-module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports:[
    AppRoutingModule,
    CommonModule
  ],
  exports:[
    SidebarComponent
  ],
})
export class SharedModule { }
