"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61737],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,y=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(96540);var o=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"mutation-mode",title:"Mutation Mode"},d=void 0,l={unversionedId:"advanced-tutorials/mutation-mode",id:"version-3.xx.xx/advanced-tutorials/mutation-mode",title:"Mutation Mode",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/mutation-mode.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/mutation-mode",permalink:"/docs/3.xx.xx/advanced-tutorials/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/mutation-mode.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1712129983,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/strapi-v4"},next:{title:"List Search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/list-search"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Modes",id:"modes",level:2},{value:"<code>pessimistic</code>",id:"pessimistic",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3},{value:"<code>undoable</code>",id:"undoable",level:3},{value:"Usage",id:"usage",level:2},{value:"Supported data hooks",id:"supported-data-hooks",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),y=u("CodeSandboxExample"),g={toc:p},f="wrapper";function b(e){var{components:t}=e,n=r(e,["components"]);return(0,o.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)(m,{id:"overview",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,o.yg)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"undoable"),".",(0,o.yg)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience.")),(0,o.yg)("h2",{id:"modes"},"Modes"),(0,o.yg)(m,{id:"modes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"We'll show usages of modes with editing a record examples.")),(0,o.yg)("h3",{id:"pessimistic"},(0,o.yg)("inlineCode",{parentName:"h3"},"pessimistic")),(0,o.yg)(m,{id:"pessimistic",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly."),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/pessimistic.gif",alt:"pessimistic mode"}),(0,o.yg)("br",null),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,o.yg)("br",null)),(0,o.yg)("h3",{id:"optimistic"},(0,o.yg)("inlineCode",{parentName:"h3"},"optimistic")),(0,o.yg)(m,{id:"optimistic",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/optimistic.gif",alt:"optimistic mode"}),(0,o.yg)("br",null),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,o.yg)("br",null)),(0,o.yg)("h3",{id:"undoable"},(0,o.yg)("inlineCode",{parentName:"h3"},"undoable")),(0,o.yg)(m,{id:"undoable",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,o.yg)("br",null),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/undoable.gif",alt:"undoable mode"}),(0,o.yg)("br",null),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone."))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Mutation mode can be set application-wide in ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#mutationmode"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    ...\n    options={{ mutationMode: "optimistic" }}\n/>\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Its default value is ",(0,o.yg)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,o.yg)("br",null),(0,o.yg)("p",null,"It can also be set in supported ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@pankod/refine-core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n  resource: "categories",\n  id: "2",\n  values: { title: "New Category Title" },\n  // highlight-next-line\n  mutationMode: "optimistic",\n});\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components."))),(0,o.yg)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,o.yg)(m,{id:"supported-data-hooks",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},(0,o.yg)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdateMany/"},(0,o.yg)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},(0,o.yg)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/"},(0,o.yg)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,o.yg)("br",null)),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(y,{path:"mutation-mode",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);