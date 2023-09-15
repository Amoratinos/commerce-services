"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[736],{82369:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var s,a=n(87462),o=n(63366),r=(n(15007),n(64983)),m=n(91515),d=["components"],i={},p=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:i},c=m.Z;function u(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-commerce-events-sdk"},"Adobe Commerce Events SDK"),(0,r.mdx)("p",null,"This package serves as the foundation for eventing on an ",(0,r.mdx)("a",{parentName:"p",href:"https://business.adobe.com/products/magento/magento-commerce.html"},"Adobe Commerce")," storefront. It provides access to a common data layer, and an event publishing and subscription service. Handling these events is up to you, but we provide the ",(0,r.mdx)("a",{parentName:"p",href:"../collector/index.md"},"Adobe Commerce Event Collector")," package that can listen for events and send them to Adobe Commerce for processing."),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("p",null,"This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on ",(0,r.mdx)("a",{parentName:"p",href:"https://unpkg.com/@adobe/magento-storefront-events-sdk@1.0.1/dist/index.js"},"unpkg"),", and the bundled version is hosted on ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@adobe/magento-storefront-events-sdk"},"npm"),"."),(0,r.mdx)("p",null,"To load the SDK as a script, use the following snippet."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js"><\/script>\n')),(0,r.mdx)("p",null,"To install the script as a dependency, run this command."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @adobe/magento-storefront-events-sdk\n")),(0,r.mdx)("h2",{id:"quick-start"},"Quick Start"),(0,r.mdx)("p",null,"Once imported, you have access to the four main functions of the Events SDK."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"context.md"},"Context")," - Set context data"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"publish.md"},"Publish")," - Publish events"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"subscribe.md"},"Subscribe")," - Subscribe to events"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"unsubscribe.md"},"Unsubscribe")," - Unsubscribe from events")),(0,r.mdx)("p",null,"The following code example shows how to get started."),(0,r.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Relevant context data must be populated before publishing events that require it."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'import mse from "@adobe/magento-storefront-events-sdk";\n\n// subscribe to events\nmse.subscribe.pageView(pageViewHandler);\n\n// set context data\nmse.context.setPage(/* page context */);\n\n// publish events\nmse.publish.pageView();\n\n// unsubscribe from events\nmse.unsubscribe.pageView(pageViewHandler);\n')),(0,r.mdx)("h2",{id:"support"},"Support"),(0,r.mdx)("p",null,"If you have any questions or encounter any issues, reach out here:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/magento-storefront-event-collector/issues"},"GitHub"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-shared-services-storefront-events-sdk-index-md-c5c4371c5d60df446bb1.js.map