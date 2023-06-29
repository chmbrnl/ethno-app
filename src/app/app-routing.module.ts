import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { SearchComponent } from './search/search.component';
import { PlantDetailsComponent } from './plant-detail/plant-detail.component';

const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'plants', component: PlantListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'plant/:sn/:who_icd_11_classification', component: PlantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }