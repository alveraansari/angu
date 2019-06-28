import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'home',component:HomeComponent  },
  {path:'aboutus',component:AboutusComponent  },
  {path:'clients',component:ClientsComponent  },
  {path:'contactus',component: ContactusComponent },
  {path:'portfolio',component: PortfolioComponent },
  {path:'services',component:  ServicesComponent},
  {path:'team',component: TeamComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
