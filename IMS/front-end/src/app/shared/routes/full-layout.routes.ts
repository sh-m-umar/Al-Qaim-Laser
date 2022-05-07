import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'invoice',
        loadChildren: () => import('../../invoice/invoice.module').then(m => m.InvoiceModule)
        
    },
    {
        path: 'product',
        loadChildren: () => import('../../products/product.module').then(m => m.ProductModule)
        
    },
    {
        path: 'customer',
        loadChildren: () => import('../../customers/customer.module').then(m => m.CustomerModule)
        
    },
    {
        path: 'stock',
        loadChildren: () => import('../../stock/stock.module').then(m => m.StockModule)
    },
    {
        path: 'sale',
        loadChildren: () => import('../../sales/sale.module').then(m => m.SaleModule)

    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    {
        path: 'user-profile',
        loadChildren: () => import('../../user-profile/user-profile.module').then(m => m.UserProfileModule)

    }
];