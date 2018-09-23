import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'infinitescroll', component: InfiniteDeviceDetailComponent
    },
    {
        path: '', component: InfiniteDeviceDetailComponent
    },
    { path: 'finitescroll', component: DeviceDetailComponent }
];
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollPaginationComponent } from './infinite-scroll-pagination/infinite-scroll-pagination.component';
import { InfiniteDeviceDetailComponent } from './infinite-device-detail/infinite-device-detail.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

@NgModule({
    imports: [
        CommonModule, RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
