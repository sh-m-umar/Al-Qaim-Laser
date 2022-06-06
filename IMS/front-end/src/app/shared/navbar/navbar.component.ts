import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    constructor(
        public sidebarservice: SidebarService,
        public router: Router) { }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() { }

    navigate(type) {
        if (type == 'package') { this.router.navigate(['product/list-products'])}
        if (type == 'user') { this.router.navigate(['customer/list-customer'])}
        if (type == 'box') { this.router.navigate(['stock'])}
        if (type == 'profile') { this.router.navigate(['user-profile'])}
    }
}
