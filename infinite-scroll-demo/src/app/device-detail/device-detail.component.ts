import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetailService, Device } from '../device-detail.service';

interface IServerResponse {
  devices: Device[];
  total: number;
}

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  devices: any[];
  loading: boolean;
  currentPage: 1;
  public responsive = false;
  itemsPerPage = 6;
  // checked by hitting api without filters 1000
  maxPages = 60 / this.itemsPerPage;

  constructor(private deviceDetailService: DeviceDetailService) {
    this.loadDeviceDetailsByPage(this.itemsPerPage, 0);
  }

  ngOnInit() {
  }
  pageChanged(event) {
    this.currentPage = event.page || 1;
    this.itemsPerPage = event.itemsPerPage;
    this.loadDeviceDetailsByPage(this.itemsPerPage, this.currentPage);
  }

  loadDeviceDetailsByPage(limit: number, skip: number) {
    this.loading = true;
    this.deviceDetailService.getDeviceDetailsList(limit, skip).subscribe(data => {
      this.devices = data;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
}
