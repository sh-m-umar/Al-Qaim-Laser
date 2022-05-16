import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'invoice',
        loadChildren: () => import('../../modules/invoice/invoice.module').then(m => m.InvoiceModule)
        
    },
    {
        path: 'product',
        loadChildren: () => import('../../modules/products/product.module').then(m => m.ProductModule)
        
    },
    {
        path: 'customer',
        loadChildren: () => import('../../modules/customers/customer.module').then(m => m.CustomerModule)
        
    },
    {
        path: 'stock',
        loadChildren: () => import('../../modules/stock/stock.module').then(m => m.StockModule)
    },
    {
        path: 'sale',
        loadChildren: () => import('../../modules/sales/sale.module').then(m => m.SaleModule)

    },
    {
        path: 'user-profile',
        loadChildren: () => import('../../modules/user-profile/user-profile.module').then(m => m.UserProfileModule)

    }
];