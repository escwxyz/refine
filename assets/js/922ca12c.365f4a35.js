"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83288],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={},s=void 0,p={unversionedId:"api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",title:"sorting-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useInfiniteList",slug:"/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715691201,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{}},l={},u=[],d={toc:u},f="wrapper";function g(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(f,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useInfiniteList, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-next-line\n    const [order, setOrder] = useState<"asc" | "desc">("asc");\n\n    const {\n        data,\n        isLoading,\n        isError,\n        hasNextPage,\n        fetchNextPage,\n        isFetchingNextPage\n    } = useInfiniteList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        config: {\n            sort: [\n                {\n                    field: "name",\n                    order,\n                },\n            ],\n        },\n        //highlight-end\n    });\n\n    if (isLoading) {\n        return <p>Loading</p>;\n    }\n    if (isError) {\n        return <p>Something went wrong</p>;\n    }\n\n    const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <button\n                onClick={() =>\n                    setOrder((prev) => (prev === "asc" ? "desc" : "asc"))\n                }\n            >\n                toggle sort\n            </button>\n            {/* highlight-end */}\n\n            <ul>\n                {allPages.map((product) => (\n                    <li key={product.id}>\n                        {product.name} - ({product.material})\n                    </li>\n                ))}\n            </ul>\n\n            {\n                hasNextPage && (\n                    <button\n                        onClick={() => fetchNextPage()}\n                        disabled={isFetchingNextPage}\n                    >\n                        {isFetchingNextPage ? "Loading more..." : "Load More" }\n                    </button>\n                )\n            }\n        </div>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}g.isMDXComponent=!0}}]);