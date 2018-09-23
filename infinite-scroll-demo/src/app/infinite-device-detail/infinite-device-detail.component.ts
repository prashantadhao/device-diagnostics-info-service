import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetailService, Device } from '../device-detail.service';

@Component({
  selector: 'app-infinite-device-detail',
  templateUrl: './infinite-device-detail.component.html',
  styleUrls: ['./infinite-device-detail.component.css']
})
export class InfiniteDeviceDetailComponent implements OnInit {
  devices: Device[] = [];
  devicesOriginal: Device[] = [];
  noOfRecords = 10;
  itemsPerPage = 100;
  constructor(private deviceDetailService: DeviceDetailService) {
    this.loadDeviceDetailsByPage(this.itemsPerPage, 0);
  }
  ngOnInit() {
  }
  onScroll() {
    if (this.devices.length < this.devicesOriginal.length) {
      const len = this.devices.length;
      for (let i = len; i <= len + this.noOfRecords; i++) {
        this.devices.push(this.devicesOriginal[i]);
      }
    }
  }
  loadDeviceDetailsByPage(limit: number, skip: number) {
    this.deviceDetailService.getDeviceDetailsList(limit, skip).subscribe(data => {
      this.devicesOriginal = data;
      this.devices = this.devicesOriginal.slice(0, this.noOfRecords);
    }, error => {
      console.log(error);
    });
  }
}
