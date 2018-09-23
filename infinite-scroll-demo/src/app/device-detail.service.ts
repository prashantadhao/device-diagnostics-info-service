import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export class Device {
  id: string;
  deviceId: string;
  timestamp: string;
  moisture: string;
}
// tslint:disable-next-line:max-line-length
const API_URL = 'https://api.mlab.com/api/1/databases/pencil/collections/readings?apiKey=oeyZ8VvF1Apa9wLhpAPQvv3zuoKLN-ab&s={"timestamp": -1}';
@Injectable({
  providedIn: 'root'
})
export class DeviceDetailService {

  constructor(private httpClient: HttpClient) { }

  headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  getDeviceDetailsList(limit, skip): Observable<Device[]> {
    const endpoint = API_URL + '&l=' + limit + '&sk=' + skip;
    return <Observable<Device[]>>this.httpClient.get(endpoint);
  }
}
