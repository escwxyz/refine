"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74209],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>p});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={title:"useResource"},c=void 0,l={unversionedId:"routing/hooks/use-resource/index",id:"routing/hooks/use-resource/index",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns the resource` object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route.",source:"@site/docs/routing/hooks/use-resource/index.md",sourceDirName:"routing/hooks/use-resource",slug:"/routing/hooks/use-resource/",permalink:"/docs/routing/hooks/use-resource/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-resource/index.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1712129983,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{title:"useResource"},sidebar:"mainSidebar",previous:{title:"Remix",permalink:"/docs/routing/integrations/remix/"},next:{title:"useGo",permalink:"/docs/routing/hooks/use-go/"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Without parameters",id:"without-parameters",level:3},{value:"With a resource name or identifier",id:"with-a-resource-name-or-identifier",level:3},{value:"Return Values",id:"return-values",level:2},{value:"resources",id:"resources",level:3},{value:"resource",id:"resource",level:3},{value:"resourceName",id:"resourcename",level:3},{value:"id",id:"id",level:3},{value:"action",id:"action",level:3},{value:"select",id:"select",level:3},{value:"identifier",id:"identifier",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},y=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),g={toc:p},f="wrapper";function h(e){var{components:t}=e,r=o(e,["components"]);return(0,n.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route."),(0,n.yg)("p",null,"If you pass a resource name or identifier to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object that matches the name or identifier. If there is no match, a temporary ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("h3",{id:"without-parameters"},"Without parameters"),(0,n.yg)(y,{id:"without-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you don't pass any parameter to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the current route by default. If there is no match, the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resources, resource, action, id } = useResource();\n'))),(0,n.yg)("h3",{id:"with-a-resource-name-or-identifier"},"With a resource name or identifier"),(0,n.yg)(y,{id:"with-a-resource-name-or-identifier",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you pass a resource name or identifier to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the name or identifier. If there is no match, a temporary ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resource } = useResource("posts");\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)("h3",{id:"resources"},"resources"),(0,n.yg)(y,{id:"resources",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"An array of resources that you defined in ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,n.yg)("h3",{id:"resource"},"resource"),(0,n.yg)(y,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object.")),(0,n.yg)("h3",{id:"resourcename"},"resourceName"),(0,n.yg)(y,{id:"resourcename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Resource name of the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object.")),(0,n.yg)("h3",{id:"id"},"id"),(0,n.yg)(y,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"id")," parameter of the current route.")),(0,n.yg)("h3",{id:"action"},"action"),(0,n.yg)(y,{id:"action",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"action")," from the current route if there is a match.")),(0,n.yg)("h3",{id:"select"},"select"),(0,n.yg)(y,{id:"select",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The function allows you to retrieve a ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and matched ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," by providing either a resource ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier"),". By default, if there is no match for the given ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier"),", the function will return the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," associated with the provided value."),(0,n.yg)("p",null,"If you don't pass any parameter to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will try to infer the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," from the current route. If there is no match, the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.yg)("p",null,"The function also accepts a second parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"force")," which is ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," by default. If you set it to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),", it will not return a ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," if there is no match.")),(0,n.yg)("h3",{id:"identifier"},"identifier"),(0,n.yg)(y,{id:"identifier",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Identifier value for the current resource, this can either be the ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," property or the ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," property of the resource.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(m,{module:"@refinedev/core/useResource",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(y,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resources"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#interfaces"},(0,n.yg)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#interfaces"},(0,n.yg)("inlineCode",{parentName:"a"},"IResourceItem")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"a"},"undefined")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resourceName"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"action"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"clone"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"select"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(resourceName: string, force?: boolean) => { resource: IResourceItem")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined, identifier: string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined}"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"identifier"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined")))))),(0,n.yg)("h4",{id:"interfaces"},"Interfaces"),(0,n.yg)(y,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"interface IResourceComponents {\n  list?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  create?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  edit?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  show?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n}\n\ninterface IResourceItem extends IResourceComponents {\n  name: string;\n  identifier?: string;\n  meta?: MetaProps;\n}\n"))))}h.isMDXComponent=!0}}]);