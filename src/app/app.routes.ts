// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home} from './home/home';
import { About} from './about/about';
import { Books} from './books/books';
import { Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About },
  { path: 'books', component: Books},
  { path: 'contact', component: Contact},
  { path: '**', redirectTo: '' }
];