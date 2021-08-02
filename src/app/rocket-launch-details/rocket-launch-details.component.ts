import { Component, Input } from '@angular/core';

@Component({
  selector: 'rocket-launch-details',
  templateUrl: './rocket-launch-details.component.html',
  styleUrls: ['./rocket-launch-details.component.css']
})

export class RocketLaunchDetailsComponent {
    @Input() detailsList : any = [];
}