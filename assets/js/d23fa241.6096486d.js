(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9149:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={sidebar_position:6,title:"Trip Tracking",id:"trip-tracking"},s={unversionedId:"trip-tracking",id:"trip-tracking",isDocsHomePage:!1,title:"Trip Tracking",description:"Use our industry-leading SDK to build experiences for curbside and in-store pickup, delivery tracking, and more.",source:"@site/docs/trip-tracking.mdx",sourceDirName:".",slug:"/trip-tracking",permalink:"/documentation/trip-tracking",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/trip-tracking.mdx",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Trip Tracking",id:"trip-tracking"},sidebar:"defaultSidebar",previous:{title:"Beacons",permalink:"/documentation/beacons"},next:{title:"SDK Reference",permalink:"/documentation/sdk"}},p=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Starting and stopping trips",id:"starting-and-stopping-trips",children:[]},{value:"Trip events",id:"trip-events",children:[]},{value:"Display live trips and ETAs",id:"display-live-trips-and-etas",children:[{value:"In the Radar trip tracking dashboard",id:"in-the-radar-trip-tracking-dashboard",children:[]},{value:"In your own UI",id:"in-your-own-ui",children:[]}]},{value:"Analytics",id:"analytics",children:[{value:"Calculations",id:"calculations",children:[]},{value:"How to filter your data",id:"how-to-filter-your-data",children:[]},{value:"Data retention settings and frequency of updates",id:"data-retention-settings-and-frequency-of-updates",children:[]}]},{value:"Support",id:"support",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use our industry-leading ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," to build experiences for curbside and in-store pickup, delivery tracking, and more."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Want to get started quickly? Follow these three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create geofences.")," Import ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences")," for your locations. Depending on your use case, a geofence might represent a retail store, a restaurant, a hotel, and so on.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integrate the Radar SDK into your app.")," Integrate the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),' into your app or website. When a customer places an order or taps "I\'m on my way," start tracking and start a trip with custom metadata (like order ID, license plate, or car model).')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display live trips and ETAs.")," Display live ETAs on the trip tracking dashboard, available on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise")," plan. Or, display live ETAs in your own UI by polling the ",(0,i.kt)("a",{parentName:"p",href:"/api#list-trips"},"list trips API")," or listening for ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking#trip-events"},"trip events")," sent to a webhook."))),(0,i.kt)("h2",{id:"starting-and-stopping-trips"},"Starting and stopping trips"),(0,i.kt)("p",null,"Integrate the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),' into your app or website. When a customer places an order or taps "I\'m on my way," start tracking and start a trip with an ID, a destination geofence, a travel mode, and custom metadata (e.g., customer name, car model, or license plate) depending on your use case.'),(0,i.kt)("p",null,'When the order is picked up or a customer taps "I\'m here," stop tracking and stop the trip.'),(0,i.kt)("p",null,"For example, on iOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// order placed or user taps "I\'m on my way"\nlet tripOptions = RadarTripOptions(externalId: "299")\ntripOptions.destinationGeofenceTag = "store"\ntripOptions.destinationGeofenceExternalId = "123"\ntripOptions.mode = .car\ntripOptions.metadata = [\n  "Customer Name": "Jacob Pena",\n  "Car Model": "Green Honda Civic"\n]\nRadar.startTrip(options: tripOptions)\nRadar.startTracking(trackingOptions: .continuous)\n\n// order picked up or user taps "I\'m here"\nRadar.completeTrip()\nRadar.stopTracking()\n')),(0,i.kt)("h2",{id:"trip-events"},"Trip events"),(0,i.kt)("p",null,"Radar calculates ETAs and generates events when trips are updated:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.started_trip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.updated_trip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.approaching_trip_destination")," (configurable ETA threshold)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination")," (destination geofence entered)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.stopped_trip"))),(0,i.kt)("p",null,"ETAs are calculated based on travel mode using the same routing engine that powers our ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),"."),(0,i.kt)("p",null,"You can receive events client-side via the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "_id": "56db1f4613012711002229f6",\n      "type": "user.updated_trip",\n      "createdAt": "2020-08-20T10:30:55.837Z",\n      "live": true,\n      "trip": {\n        "_id": "5f3e50491c2b7d005c81f5d9",\n        "live": true,\n        "externalId": "299",\n        "metadata": {\n          "Customer Name": "Jacob Pena",\n          "Car Model": "Green Honda Civic"\n        },\n        "mode": "car",\n        "destinationGeofenceTag": "store",\n        "destinationGeofenceExternalId": "123",\n        "destinationLocation": {\n          "coordinates": [\n            -105.061198,\n            39.779366\n          ],\n          "type": "Point"\n        },\n        "eta": {\n          "duration": 5.5,\n          "distance": 1331\n        },\n        "createdAt": "2020-08-20T10:27:55.830Z",\n        "updatedAt": "2020-08-20T10:30:55.837Z",\n        "status": "started"\n      },\n    },\n  ],\n  "user": {\n    "_id": "56db1f4613012711002229f4",\n    "live": true,\n    "userId": "1",\n    "deviceId": "C305F2DB-56DC-404F-B6C1-BC52F0B680D8",\n    ...\n  }\n}\n')),(0,i.kt)("h2",{id:"display-live-trips-and-etas"},"Display live trips and ETAs"),(0,i.kt)("h3",{id:"in-the-radar-trip-tracking-dashboard"},"In the Radar trip tracking dashboard"),(0,i.kt)("p",null,"The Radar trip tracking dashboard displays active trips for a specific destination geofence, including ID, custom metadata, and ETA."),(0,i.kt)("p",null,"The trip tracking dashboard is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise")," plan."),(0,i.kt)("p",null,"Ask your customer success manager for a distribution of the app specific to your organization."),(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/38fY5fD4H47UGa4KZXHLib/989305812e9b35a741141b1fd9c3befa/tablet-view.gif",className:"hero-image"}),(0,i.kt)("h3",{id:"in-your-own-ui"},"In your own UI"),(0,i.kt)("p",null,"Poll the ",(0,i.kt)("a",{parentName:"p",href:"/api#list-trips"},"list trips API")," to retrieve active trips for a specific destination geofence, including ID, custom metadata, and ETA. For example, you might poll the list trips API from an internal dashboard."),(0,i.kt)("p",null,"Or, listen for ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking#trip-events"},"trip events")," sent to a webhook. From there, forward trip information, including ID, custom metadata, and ETA, to other systems. For example, you might set up a webhook that sends ETA to an order management or kitchen display system."),(0,i.kt)("h2",{id:"analytics"},"Analytics"),(0,i.kt)("p",null,"Radar offers analytics on trip data and location opt-in rates from users in your project. Analytics on trip data is grouped under the Trips tab, and analytics on location permission opt-in rates is grouped under the Permissions tab. Read more about Permissions ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/documentation/faqs#location-permissions"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Median wait time")),": the median duration of time that it takes between the moment when a user arrives at a destination (",(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination"),") and the moment when the trip is marked complete (",(0,i.kt)("inlineCode",{parentName:"li"},"completed"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Number of trips")),": the total count of all trips for a specific project which is live and has a status of ",(0,i.kt)("inlineCode",{parentName:"li"},"completed"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Median trip time")),": the median duration of time that it takes between the moment when the user starts a trip (",(0,i.kt)("inlineCode",{parentName:"li"},"user.started_trip"),") and the moment when they arrive at the destination (",(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination"),").")),(0,i.kt)("h3",{id:"calculations"},"Calculations"),(0,i.kt)("p",null,"Wait time and trip time are only calculated for trips that have a status of ",(0,i.kt)("inlineCode",{parentName:"p"},"completed")," and have timestamp entries for ",(0,i.kt)("inlineCode",{parentName:"p"},"started_at"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arrived_at"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"completed_at"),". These calculations exclude expired trips."),(0,i.kt)("h3",{id:"how-to-filter-your-data"},"How to filter your data"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Range:")," Select a date from the drop-down date picker. Make sure that the date in the left-hand box falls before the date in the right-hand box."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Radar User ID"),': This field requires the unique Radar-generated ID and does not accept "external ID" or "device ID" in its place. You can find the unique Radar-generated ID for each user by navigating to the Users page and clicking "View" in the corresponding row of the user.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination Geofence Tag:"),' Each geofence has a geofence tag. You can find the tag to a specific geofence in the "Tag" column on the Geofences page in the sidebar, or you can navigate to the trips page in the sidebar and click on the external ID listed under "Destination", which will show the details of the destination geofence. This field can be used alone or in tandem with the Destination Geofence External ID field.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination Geofence External ID"),': Each geofence has an external ID. You can find the external ID for a specific geofence in the "External ID" column on the Geofences page in the sidebar, or you can navigate to the Trips page and click on the external ID listed under "Destination". This field can be used alone or in tandem with the Destination Geofence Tag field.'),(0,i.kt)("p",null,"Trip stats apply to the environment in which you view the metrics. For example, when viewing the metrics in the test environment, the metrics only include trip data from the test environment."),(0,i.kt)("h3",{id:"data-retention-settings-and-frequency-of-updates"},"Data retention settings and frequency of updates"),(0,i.kt)("p",null,"Data retention settings (a setting on the ",(0,i.kt)("em",{parentName:"p"},"project")," level) apply to the data in Analytics as well. The default data retention settings for trip data is 90 days."),(0,i.kt)("p",null,"Median wait time, trip count, and median trip duration metrics are all updated nightly, so all calculations do not include the current day's data."),(0,i.kt)("p",null,"If your project does not have any past trips, you will not see any data in the analytics section of your dashboard. Take your first trip to see the statistics populate!"),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.io"},"support@radar.io"),"."))}d.isMDXComponent=!0}}]);