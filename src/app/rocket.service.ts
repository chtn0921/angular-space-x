import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RocketService {
  constructor( ) {  }

  /** GET rockets from the server */
  getRockets(filters: any = {}): Promise<any> {
    const rocketsUrl = 'https://api.spacexdata.com/v3/launches?' + Object.keys(filters)
                                .map(key => filters[key] ? (key + '=' + filters[key]) : null )
                                .filter( e => e != null )
                                .join('&');
    return fetch(rocketsUrl);
  }
}
