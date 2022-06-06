import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MaterialModule } from "src/assets/angular-material.module";


@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        PerfectScrollbarModule,
        MaterialModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ColorSwitcherComponent,
        DeleteModalComponent
    ],
    providers: [ ],
})
export class SharedModule { }
