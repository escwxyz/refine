"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99258],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=o.createContext({}),l=function(e){var r=o.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(m.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),f=n,d=c["".concat(m,".").concat(f)]||c[f]||p[f]||a;return t?o.createElement(d,i(i({ref:r},u),{},{components:t})):o.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31632:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(96540);var o=t(15680);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","mui","react-hook-form"]},m=void 0,l={unversionedId:"examples/form/mui/useDrawerForm",id:"version-3.xx.xx/examples/form/mui/useDrawerForm",title:"useDrawerForm",description:"useModalForm hook allows you to manage a form within a modal as well as a drawer. It provides some useful methods to handle the form modal or form drawer. You can view the live example or review the source code to see how it's used with Material UI.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/mui/useDrawerForm.md",sourceDirName:"examples/form/mui",slug:"/examples/form/mui/useDrawerForm",permalink:"/docs/3.xx.xx/examples/form/mui/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/mui/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715691201,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","mui","react-hook-form"]},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/examples/form/mantine/useStepsForm"},next:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/mui/useForm"}},u={},c=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const d={toc:c},y="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal as well as a drawer. It provides some useful methods to handle the form modal or form drawer. You can view the live example or review the source code to see how it's used with Material UI."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useModalForm/"},"Refer to the useModalForm hook documentation for more information. \u2192")),(0,o.yg)(p,{path:"form-material-ui-use-drawer-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);