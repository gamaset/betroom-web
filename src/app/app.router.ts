import { Routes, RouterModule } from '@angular/router'
import { MarketBetListComponent } from './pages/market-bet-list/market-bet-list.component';
const routes: Routes = [
    //home
    {
        path: 'pages/market-bet-list',
        component: MarketBetListComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);