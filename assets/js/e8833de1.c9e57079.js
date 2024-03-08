"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Refresh",swizzle:!0},l=void 0,p={unversionedId:"ui-integrations/ant-design/components/buttons/refresh-button/index",id:"ui-integrations/ant-design/components/buttons/refresh-button/index",title:"Refresh",description:"` uses Ant Design's  component to update the data shown on the page via the useInvalidate` hook.",source:"@site/docs/ui-integrations/ant-design/components/buttons/refresh-button/index.md",sourceDirName:"ui-integrations/ant-design/components/buttons/refresh-button",slug:"/ui-integrations/ant-design/components/buttons/refresh-button/",permalink:"/docs/ui-integrations/ant-design/components/buttons/refresh-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/buttons/refresh-button/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1709905833,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{title:"Refresh",swizzle:!0},sidebar:"mainSidebar",previous:{title:"List",permalink:"/docs/ui-integrations/ant-design/components/buttons/list-button/"},next:{title:"Save",permalink:"/docs/ui-integrations/ant-design/components/buttons/save-button/"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"hideText",id:"hidetext",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),h=u("PropTag"),f=u("PropsTable"),g={toc:c};function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate"))," hook."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("strong",{parentName:"a"},"Refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n  // highlight-next-line\n  RefreshButton,\n  Show,\n} from "@refinedev/antd";\nimport { Typography } from "antd";\n\nconst { Title, Text } = Typography;\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show\n      isLoading={isLoading}\n      // highlight-next-line\n      headerButtons={<RefreshButton />}\n    >\n      <Title level={5}>Id</Title>\n      <Text>{record?.id}</Text>\n\n      <Title level={5}>Title</Title>\n      <Text>{record?.title}</Text>\n    </Show>\n  );\n};\n\ninterface IPost {\n  id: string;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts/show/123"]}\n    resources={[\n      {\n        name: "posts",\n        show: PostShow,\n        list: () => {\n          return (\n            <RefineAntd.List>\n              <p>Your list page here</p>\n            </RefineAntd.List>\n          );\n        },\n      },\n    ]}\n  />,\n);\n'))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},"recordItemId"),(0,r.kt)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="1"\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetch the record whose resource is "post" and whose id is "1".')),(0,r.kt)("h3",{id:"resource"},"resource"),(0,r.kt)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource is going to be refreshed. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is inferred from the route params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      // highlight-next-line\n      resource="categories"\n      // highlight-next-line\n      recordItemId="2"\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetches the record whose resource is "categories" and whose id is "2".'),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.kt)("h3",{id:"hidetext"},"hideText"),(0,r.kt)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hideText")," is used to hide the text of the button. When its ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon will be visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      // highlight-next-line\n      hideText\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n'))),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.kt)(h,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(f,{module:"@refinedev/antd/RefreshButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}b.isMDXComponent=!0}}]);