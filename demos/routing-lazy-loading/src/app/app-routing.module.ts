import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { HomeComponent } from './home/home/home.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersModule' },
  // { path: 'characters', component: CharacterListComponent },
  // { path: 'characters/:id', component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
