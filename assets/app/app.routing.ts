import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {ComplaintsComponent} from "./complaints/complaints.component";
import {FileComplaintComponent} from "./complaints/filecomplaint.component";
import {DetailedViewComponent} from "./complaints/detailedview.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full'},
    { path: 'homepage', component: HomepageComponent},
    { path: 'complaints', component: ComplaintsComponent},
    { path: 'file', component: FileComplaintComponent},
    { path: 'detailed',redirectTo: '/complaints', pathMatch: 'full'},
    { path: 'detailed/:id', component: DetailedViewComponent},/*
    { path: 'suggestions', component: SuggestionComponent}*/
];

export const routing = RouterModule.forRoot(APP_ROUTES);