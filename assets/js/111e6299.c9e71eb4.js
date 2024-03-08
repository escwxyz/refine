"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"useNavigation"},s=void 0,p={unversionedId:"routing/hooks/use-navigation/index",id:"routing/hooks/use-navigation/index",title:"useNavigation",description:"useNavigation is a hook that provides methods to navigate the app. Internally, it uses the go method of the routerProvider.",source:"@site/docs/routing/hooks/use-navigation/index.md",sourceDirName:"routing/hooks/use-navigation",slug:"/routing/hooks/use-navigation/",permalink:"/docs/routing/hooks/use-navigation/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-navigation/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1709905833,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{title:"useNavigation"},sidebar:"mainSidebar",previous:{title:"useGetToPath",permalink:"/docs/routing/hooks/use-get-to-path/"},next:{title:"With Next.js",permalink:"/docs/examples/next-js/"}},d={},u=[{value:"Return Values",id:"return-values",level:2},{value:"list",id:"list",level:3},{value:"create",id:"create",level:3},{value:"edit",id:"edit",level:3},{value:"show",id:"show",level:3},{value:"clone",id:"clone",level:3},{value:"push",id:"push",level:3},{value:"replace",id:"replace",level:3},{value:"goBack",id:"goback",level:3},{value:"listUrl",id:"listurl",level:3},{value:"createUrl",id:"createurl",level:3},{value:"editUrl",id:"editurl",level:3},{value:"showUrl",id:"showurl",level:3},{value:"cloneUrl",id:"cloneurl",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values-1",level:3},{value:"Interfaces",id:"interfaces",level:4}],c=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:u};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a hook that provides methods to navigate the app. Internally, it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,a.kt)("p",null,"This hook is a legacy hook and is not recommended, despite not being deprecated. You should use your router libraries' hooks and methods instead when dealing with the custom navigations."),(0,a.kt)("p",null,"If you're in need of a navigation hook to use to navigate between your actions and resources, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-go"},(0,a.kt)("inlineCode",{parentName:"a"},"useGo"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-get-to-path"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetToPath"))," hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst {\n  list,\n  create,\n  edit,\n  show,\n  clone,\n  push,\n  replace,\n  goBack,\n  listUrl,\n  createUrl,\n  editUrl,\n  showUrl,\n  cloneUrl,\n} = useNavigation();\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"All functions the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook returns, except ",(0,a.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"goBack"),", accept a ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," parameter. This is an optional parameter that can be used to pass additional parameters to the routes if they contain multiple parameters other than ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,a.kt)("h3",{id:"list"},"list"),(0,a.kt)(c,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the list page of the given resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { list } = useNavigation();\n\nlist("posts"); // It navigates to the `/posts` page\n')),(0,a.kt)("p",null,"You can also give a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," method.")),(0,a.kt)("h3",{id:"create"},"create"),(0,a.kt)(c,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the create page of the given resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { create } = useNavigation();\n\ncreate("posts"); // It navigates to the `/posts/create` page\n')),(0,a.kt)("p",null,"You can also give a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method.")),(0,a.kt)("h3",{id:"edit"},"edit"),(0,a.kt)(c,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the edit page of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". When you use this method, you need to give it the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to edit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { edit } = useNavigation();\n\nedit("posts", "1"); // It navigates to the `/posts/edit/1` page\n')),(0,a.kt)("p",null,"You can also give a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," method.")),(0,a.kt)("h3",{id:"show"},"show"),(0,a.kt)(c,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the show page of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". When you use this method, you need to give the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to show."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { show } = useNavigation();\n\nshow("posts", "1"); // It navigates to the `/posts/show/1` page\n')),(0,a.kt)("p",null,"You can also give a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," method.")),(0,a.kt)("h3",{id:"clone"},"clone"),(0,a.kt)(c,{id:"clone",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the clone page of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". When you use this method, you need to give the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to clone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { clone } = useNavigation();\n\nclone("posts", "1"); // It navigates to the `/posts/clone/1` page\n')),(0,a.kt)("p",null,"You can also give a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," method.")),(0,a.kt)("h3",{id:"push"},"push"),(0,a.kt)(c,{id:"push",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method pushes a new entry onto the history stack. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"push")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { push } = useNavigation();\n\npush("custom-page"); // It navigates to the `/custom-page` page\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"push")," method parameters are dependent on your router provider.")),(0,a.kt)("h3",{id:"replace"},"replace"),(0,a.kt)(c,{id:"replace",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method replaces the current entry on the history stack. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { replace } = useNavigation();\n\nreplace("custom-page"); // It navigates to the `/custom-page` page\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"replace")," method parameters are dependent on your router provider.")),(0,a.kt)("h3",{id:"goback"},"goBack"),(0,a.kt)(c,{id:"goback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method navigates to the previous page. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"goBack")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { goBack } = useNavigation();\n\ngoBack(); // It navigates to the previous page\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"goBack")," method parameters are dependent on your router provider.")),(0,a.kt)("h3",{id:"listurl"},"listUrl"),(0,a.kt)(c,{id:"listurl",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method returns the list page URL of the given resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { listUrl } = useNavigation();\n\nlistUrl("posts"); // It returns the `/posts` URL\n'))),(0,a.kt)("h3",{id:"createurl"},"createUrl"),(0,a.kt)(c,{id:"createurl",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method returns the create page URL of the given resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { createUrl } = useNavigation();\n\ncreateUrl("posts"); // It returns the `/posts/create` URL\n'))),(0,a.kt)("h3",{id:"editurl"},"editUrl"),(0,a.kt)(c,{id:"editurl",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method returns the edit page URL of the given resource and id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { editUrl } = useNavigation();\n\neditUrl("posts", "1"); // It returns the `/posts/edit/1` URL\n'))),(0,a.kt)("h3",{id:"showurl"},"showUrl"),(0,a.kt)(c,{id:"showurl",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method returns the show page URL of the given resource and id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { showUrl } = useNavigation();\n\nshowUrl("posts", "1"); // It returns the `/posts/show/1` URL\n'))),(0,a.kt)("h3",{id:"cloneurl"},"cloneUrl"),(0,a.kt)(c,{id:"cloneurl",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("p",null,"This method returns the clone page URL of the given resource and id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { cloneUrl } = useNavigation();\n\ncloneUrl("posts", "1"); // It returns the `/posts/clone/1` URL\n'))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-values-1"},"Return values"),(0,a.kt)(c,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the list page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, type: HistoryType, meta?: Record<string, any>) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"create"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the create page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, type: HistoryType, meta?: Record<string, any>) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edit"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the edit page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, type: HistoryType, meta?: Record<string, any>) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the show page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, type: HistoryType, meta?: Record<string, any>) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clone"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the clone page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, type: HistoryType, meta?: Record<string, any>) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"push"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that pushes the given path to the history stack"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(path: string, ...rest: unknown[]) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"replace"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that replaces the current entry on the history stack"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(path: string, ...rest: unknown[]) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"goBack"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that navigates to the previous page"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that returns the list page URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, meta?: Record<string, any>) => string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that returns the create page URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, meta?: Record<string, any>) => string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"editUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that returns the edit page URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, meta?: Record<string, any>) => string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"showUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that returns the show page URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, meta?: Record<string, any>) => string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cloneUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Method that returns the clone page URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(resource: string, id: BaseKey, meta?: Record<string, any>) => string")))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)(c,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/interface-references#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"type BaseKey"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'type HistoryType = "push" | "replace";')))))}g.isMDXComponent=!0}}]);