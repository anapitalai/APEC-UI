// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox:{  
    //mapboxKey: 'pk.eyJ1IjoiYW5hcGl0YWxhaSIsImEiOiJjazkyZWVrZ2QwNTQ5M2xuN3RvMzk2dm1xIn0.ggnZfMXWHJBF-RZAPcOxKw'
   mapboxKey:'pk.eyJ1IjoiYW5hcGl0YWxhaSIsImEiOiJjazkyZWVrZ2QwNTQ5M2xuN3RvMzk2dm1xIn0.ggnZfMXWHJBF-RZAPcOxKw'
  },
  pusher:{
    appId: '947043',
    key: '6384e05eafa2609b7f1e',
    secret: 'f2453bf8c62751ecc148',
    cluster: 'ap4',
    encrypted: true
  }

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
