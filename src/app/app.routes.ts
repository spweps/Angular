import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '/', component: Registration },
    { path: 'users', component: users.component.html}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
