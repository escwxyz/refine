"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61627],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});t(37953);var r=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"image",title:"Image",swizzle:!0},l=void 0,c={unversionedId:"api-reference/antd/components/fields/image",id:"version-3.xx.xx/api-reference/antd/components/fields/image",title:"Image",description:"This field is used to display images and uses `` from Ant Design.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/image.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/image",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/image",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/image.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1716366710,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{id:"image",title:"Image",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/file"},next:{title:"Markdown",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/markdown"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},u=m("DocThumbsUpDownFeedbackWidget"),f=m("PropsTable"),g={toc:d},y="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(y,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field is used to display images and uses ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/image/#header"},(0,r.yg)("inlineCode",{parentName:"a"},"<Image>"))," from Ant Design."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"<ImageField>")," with the example in the edit page."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  List,\n  Table,\n  useTable,\n  // highlight-next-line\n  ImageField,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="50%" />\n        <Table.Column<IPost>\n          title="Image"\n          dataIndex="image"\n          render={(_, record) => (\n            // highlight-start\n            <ImageField\n              value={record.image[0].url}\n              title={record.image[0].name}\n              width={200}\n            />\n            // highlight-end\n          )}\n          width="50%"\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  image: [\n    {\n      url: string;\n      name: string;\n    },\n  ];\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(u,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@pankod/refine-antd/ImageField","value-description":"Image path",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/image/#API"},"Image"),"."))))}b.isMDXComponent=!0}}]);