import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'Dashboard', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Invoice', icon: 'bx bx-file-blank', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/invoice/new', title: 'Invoice', icon: 'bx bx-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/invoice/search', title: 'Find Invoice', icon: 'bx bx-file-find', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Products', icon: 'bx bx-package', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/product/list-products', title: 'All Products', icon: 'bx bx-grid-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/product/add-new-products', title: 'Add New Products', icon: 'bx bx-add-to-queue', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Customers', icon: 'bx bx-user-pin', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/customer/add-new-customer', title: 'Add New Customer', icon: 'bx bx-user-plus', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/customer/list-customer', title: 'All Customers', icon: 'bx bx-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/stock', title: 'Stock', icon: 'bx bx-box', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Sales', icon: 'bx bx-money', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/sale/list-sold-products', title: 'Sold Products', icon: 'bx bx-diamond', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Authentication', icon: 'bx bx-lock', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            
            { path: '/al-qaim-lasers/demo/vertical/auth/sign-in', title: 'Sign In', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/sign-up', title: 'Sign Up', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/signin-with-header-footer', title: 'SignIn With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/signup-with-header-footer', title: 'SignUp With Header Footer', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/forgot-password', title: 'Forgot Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/reset-password', title: 'Reset Password', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/al-qaim-lasers/demo/vertical/auth/lock-screen', title: 'Lock Screen', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            
        ]
    }
];