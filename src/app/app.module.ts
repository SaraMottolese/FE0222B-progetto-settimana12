import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule, Router } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { MovieComponent } from "./components/movie/movie.component";
import { AuthGuard } from "./dashboard/auth.guard";
import { AuthRoutingModule } from "./dashboard/auth-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./dashboard/auth.module";
import { ProfileComponent } from "./components/profile/profile.component";
import { AppComponent } from "./app.component";

const routes:Route[] = [
    {
      path:'',
      component: MovieComponent, canActivate:[AuthGuard]
    },
    {
      path:'profile',
      component: ProfileComponent, canActivate:[AuthGuard]
    }
  ]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MovieComponent,
        ProfileComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        AuthModule,
        AuthRoutingModule,
        HttpClientModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}
