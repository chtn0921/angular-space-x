import { Component, OnInit } from '@angular/core';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "SpaceX Launch Programs";
  loader = 'assets/images/loader.gif'
  uniqueLaunchYears = new Array(16).fill(0).map((_, index) => 2006 + index);
  items = [];
  data: any = [];
  isLoaded: boolean = false;
  filters: any;

  constructor(private rocketService: RocketService) { }

  ngOnInit() {
    this.filters = {
      limit: 150,
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined,
    }
    this.fetchAPI(this.filters);
  }

  fetchAPI(filters: any = {}) {
    this.isLoaded = true;
    this.filters = filters;
    this.rocketService.getRockets(filters)
      .then(response => response.json())
      .then(data => {
        this.isLoaded = false;
        this.data = data;
      });
  }

  updateApiFilters(type: any, value: any) {
    if (this.filters[type] === value) {
      value = undefined;
    }

    const newFilters = {
      ...this.filters,
      [type]: value,
    };

    this.fetchAPI(newFilters);
  }

}
