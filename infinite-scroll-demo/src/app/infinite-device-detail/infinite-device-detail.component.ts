import {Component, OnInit} from '@angular/core';
import {Device, DeviceDetailService} from '../device-detail.service';

@Component({
  selector: 'app-infinite-device-detail',
  templateUrl: './infinite-device-detail.component.html',
  styleUrls: ['./infinite-device-detail.component.css']
})
export class InfiniteDeviceDetailComponent implements OnInit {
  devices: Device[] = [];
  itemsPerPage = 10;
  skip = 0;

  constructor(private deviceDetailService: DeviceDetailService) {
    this.loadDeviceDetailsByPage(this.itemsPerPage, this.skip);
  }

  ngOnInit() {
  }

  onScroll() {
    this.loadDeviceDetailsByPage(this.itemsPerPage, this.skip);
  }

  loadDeviceDetailsByPage(limit: number, skip: number) {
    this.deviceDetailService.getDeviceDetailsList(limit, skip).subscribe(data => {
      const temp = this.devices.concat(data);
      this.devices = temp;
      this.skip = this.devices.length;
    }, error => {
      console.log(error);
    });
  }
}
