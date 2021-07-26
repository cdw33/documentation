(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1443],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2907:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={sidebar_position:12,sidebar_hidden:!0,title:"Insights"},s={unversionedId:"insights",id:"insights",isDocsHomePage:!1,title:"Insights",description:"Insights has been deprecated. Contact your customer success manager for more information.",source:"@site/docs/insights.mdx",sourceDirName:".",slug:"/insights",permalink:"/documentation/insights",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/insights.mdx",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_hidden:!0,title:"Insights"},sidebar:"miscSidebar",previous:{title:"FAQs",permalink:"/documentation/faqs"},next:{title:"Vulnerability Disclosure Policy",permalink:"/documentation/vulnerability-disclosure-policy"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Confidence",id:"confidence",children:[]},{value:"Verify events",id:"verify-events",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"alert alert-warning",role:"alert"},"Insights has been deprecated. Contact your customer success manager for more information."),(0,a.kt)("p",null,"Insights predicts a user's home and work locations and detects when a user is at home, at work, traveling, or commuting."),(0,a.kt)("img",{src:"//images.ctfassets.net/f2vbu16fzuly/3KgzSlQ6Ju7OQwr1yR1VZK/66686108ec5249efcb610abc4e792c4d/insights-square-dropshadow.svg",className:"hero-image hero-image--small"}),(0,a.kt)("p",null,"Insights provides the following user context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  insights: {\n    state: {\n      home: false,\n      office: false,\n      traveling: true,\n      commuting: false\n    },\n    locations: [\n      {\n        type: "home",\n        coordinates: [\n          -73.977797,\n          40.783826\n        ],\n        confidence: 3\n      },\n      {\n        type: "office",\n        coordinates: [\n          -73.977797,\n          40.783826\n        ],\n        confidence: 3\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Insights also provides the following events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.entered_home")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.exited_home")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.entered_office")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.exited_office")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.started_traveling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.stopped_traveling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.started_commuting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.stopped_commuting"))),(0,a.kt)("p",null,"You can receive events client-side via the ",(0,a.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,a.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,a.kt)("p",null,"Insights is available on the ",(0,a.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise")," plan."),(0,a.kt)("p",null,"You can enable Insights on the ",(0,a.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/settings"},"Settings page"),"."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"When Insights is on, Radar stores and clusters historical location data for each user. Based on the size, location, and time distribution of clusters, Radar learns a user's approximate home and office locations after a few days."),(0,a.kt)("p",null,"Radar generates a home or office entry event if a user enters their predicted home or office location with sufficient confidence, then a home or office exit event when the user leaves their predicted home or office location with sufficient confidence."),(0,a.kt)("p",null,"Radar also generates a traveling started event if a user travels more than 100 kilometers from their predicted home location, then a traveling stopped event when the user returns."),(0,a.kt)("p",null,"If a user is at their predicted home or office location, Radar will not generate a place entry event. Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/places"},"Places"),"."),(0,a.kt)("h2",{id:"confidence"},"Confidence"),(0,a.kt)("p",null,"All insights events have confidence levels. Confidence levels range from ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (low) to ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," (high). Confidence is based on the size and time distribution of clusters."),(0,a.kt)("p",null,"On average, Radar learns a user's approximate home and office locations after a few days. In the foreground, Radar needs location data from a few app opens. In the background, Radar needs location data from a few days of activity."),(0,a.kt)("p",null,"When confidence is low, a user's approximate home and office locations may be the same until they start to diverge over time."),(0,a.kt)("p",null,"You may decide to ignore insights based on confidence levels."),(0,a.kt)("h2",{id:"verify-events"},"Verify events"),(0,a.kt)("p",null,"You can accept or reject insights events after user check-ins or other forms of verification. Event verifications will be used to improve the accuracy and confidence level of future events."),(0,a.kt)("p",null,"For example, to accept an event on iOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.acceptEventId(event._id, verifiedPlaceId: nil)\n")))}u.isMDXComponent=!0}}]);