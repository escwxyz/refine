"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[804],{58860:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>h});var t=a(37953);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=t.createContext({}),p=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(r.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,h=d["".concat(r,".").concat(g)]||d[g]||m[g]||o;return a?t.createElement(h,s(s({ref:n},c),{},{components:a})):t.createElement(h,s({ref:n},c))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=g;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},17134:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(37953);var t=a(58860);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",slug:"heroicons-with-tailwind",authors:"abdullah_numan",tags:["tailwind","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-18-heroicons/social.png",hide_table_of_contents:!1},r=void 0,p={permalink:"/blog/heroicons-with-tailwind",source:"@site/blog/2023-09-18-heroicons.md",title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",date:"2023-09-18T00:00:00.000Z",formattedDate:"September 18, 2023",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"},{label:"css",permalink:"/blog/tags/css"}],readingTime:9.345,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",slug:"heroicons-with-tailwind",authors:"abdullah_numan",tags:["tailwind","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-18-heroicons/social.png",hide_table_of_contents:!1},prevItem:{title:"Building React admin panel with NextUI and Refine",permalink:"/blog/next-ui-react-admin-panel"},nextItem:{title:"Tailwind Flex for Responsive React Components",permalink:"/blog/tailwind-flex"},relatedPosts:[{title:"rem vs em - Everything you need to know",description:"We'll look at everything em and rem, their differences, when and how to use them, and practical examples of em and rem in action",permalink:"/blog/rem-vs-em",formattedDate:"July 19, 2024",authors:[{name:"Fimber Elemuwa",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"fimber_elemuwa"}],readingTime:13.01,date:"2024-07-19T00:00:00.000Z"},{title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",permalink:"/blog/tailwind-flex",formattedDate:"September 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.72,date:"2023-09-11T00:00:00.000Z"},{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.96,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[{title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of RefineWeek series will be structured.",permalink:"/blog/refine-react-invoice-generator-1",formattedDate:"April 10, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.195,date:"2023-04-10T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",permalink:"/blog/javascript-variadic-currying",formattedDate:"May 27, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.68,date:"2024-05-27T00:00:00.000Z"},{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"December 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.11,date:"2023-12-13T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Install Heroicons",id:"install-heroicons",level:3},{value:"A Navbar with Heroicons",id:"a-navbar-with-heroicons",level:2},{value:"Styles",id:"styles",level:3},{value:"Adding and Styling Heroicons with TailwindCSS",id:"adding-and-styling-heroicons-with-tailwindcss",level:3},{value:"Using Regular TailwindCSS Utilities with Heroicons",id:"using-regular-tailwindcss-utilities-with-heroicons",level:3},{value:"Using <code>SVG</code> Related TailwindCSS Utilities with Heroicons",id:"using-svg-related-tailwindcss-utilities-with-heroicons",level:3},{value:"Using non-TailwindCSS Classes with Heroicons",id:"using-non-tailwindcss-classes-with-heroicons",level:3},{value:"Applying Native <code>&lt;svg&gt;</code> Properties to Heroicons",id:"applying-native-svg-properties-to-heroicons",level:3},{value:"Applying Responsive TailwindCSS Utils to Heroicons",id:"applying-responsive-tailwindcss-utils-to-heroicons",level:3},{value:"Summary",id:"summary",level:2}],m={toc:d},g="wrapper";function h(e){var{components:n}=e,a=s(e,["components"]);return(0,t.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){i(e,n,a[n])}))}return e}({},m,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://heroicons.com"},"Heroicons")," are SVG-based icons packaged by the creators of TailwindCSS. They come in two size variants, ",(0,t.yg)("inlineCode",{parentName:"p"},"20"),", which is suitable for small buttons and form elements, and a ",(0,t.yg)("inlineCode",{parentName:"p"},"24")," size, that is useful for primary navigation buttons like call to action and hero sections. ",(0,t.yg)("inlineCode",{parentName:"p"},"24")," size comes as ",(0,t.yg)("inlineCode",{parentName:"p"},"solid")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"outline"),"."),(0,t.yg)("p",null,"A Heroicon is a React component that returns an ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," element with props passed to it. We are able to set values for the properties of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," element, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"className"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"fill"),", by passing them to the Heroicon component."),(0,t.yg)("p",null,"TailwindCSS ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," classes such as ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke-{color}-{saturation}")," are very useful in styling regular ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," elements. Heroicons take it one step forward by allowing the ",(0,t.yg)("inlineCode",{parentName:"p"},"className")," prop to a Heroicon JSX element. This means we can pass TailwindCSS classes to a Heroicon component to style its ",(0,t.yg)("inlineCode",{parentName:"p"},"svg>")," element. For example, we can set the ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke")," color of a Heroicon ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," with TailwindCSS classes simply by adding ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke-{color}-{saturation}")," to the Heroicon component's ",(0,t.yg)("inlineCode",{parentName:"p"},"className"),"."),(0,t.yg)("p",null,"Besides, we can also pass regular properties such as ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"fill"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"width")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"height")," of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," to the Heroicon, which is assigned to the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," element."),(0,t.yg)("p",null,"In this post, we use Heroicons with both TailwindCSS and non-Tailwind classes. We'll work on an already built navbar that currently has Tailwind styled regular ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," icons (they are the same ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>"),"'s produced from the Heroicons we'll be using). We'll be replacing them with Heroicon React components and styling them accordingly."),(0,t.yg)("p",null,"The existing navbar is available in ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/anewman15/navbar-hero"},"this repository"),". As using Heroicons is pretty easy, to grasp how the examples work, it is enough just to follow the JSX. If you want to run the app and see what's going on in the browser when the style changes, please follow the steps below to clone the repo and run it locally."),(0,t.yg)("p",null,"Steps we'll cover:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#install-heroicons"},"Install Heroicons")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#a-navbar-with-heroicons"},"A Navbar with Heroicons"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#adding-and-styling-heroicons-with-tailwindcss"},"Adding and Styling Heroicons with TailwindCSS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-regular-tailwindcss-utilities-with-heroicons"},"Using Regular TailwindCSS Utilities with Heroicons")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-svg-related-tailwindcss-utilities-with-heroicons"},"Using ",(0,t.yg)("inlineCode",{parentName:"a"},"SVG")," Related TailwindCSS Utilities with Heroicons")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-non-tailwindcss-classes-with-heroicons"},"Using non-TailwindCSS Classes with Heroicons")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#applying-native-svg-properties-to-heroicons"},"Applying Native ",(0,t.yg)("inlineCode",{parentName:"a"},"<svg>")," Properties to Heroicons")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#applying-responsive-tailwindcss-utils-to-heroicons"},"Applying Responsive TailwindCSS Utils to Heroicons"))))),(0,t.yg)("h2",{id:"preparation"},"Preparation"),(0,t.yg)("p",null,"Clone the repository ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog-heroicons-example"},"here"),"."),(0,t.yg)("p",null,"Then open it in your code editor and run:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run start\n")),(0,t.yg)("h3",{id:"install-heroicons"},"Install Heroicons"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @heroicons/react\n")),(0,t.yg)("p",null,"Then to compile newly added TailwindCSS classes, run the CSS compiler in ",(0,t.yg)("inlineCode",{parentName:"p"},"watch")," mode:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npx tailwindcss -i ./src/styles/styles.css -o ./public/styles/styles.css --watch\n")),(0,t.yg)("h2",{id:"a-navbar-with-heroicons"},"A Navbar with Heroicons"),(0,t.yg)("p",null,"Currently, the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Navbar />")," component looks like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/navbar/Navbar.tsx"',title:'"src/components/navbar/Navbar.tsx"'},'import React, { useState } from "react";\nimport TailzupLogo from "../icons/TailzupLogo";\nimport { Avatar } from "../icons/Avatar";\nimport { HamburgerIcon } from "../icons/HamburgerIcon";\nimport { SearchIcon } from "../icons/SearchIcon";\n\nconst Navbar = () => {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const menuHidden = !isMobileMenuOpen ? "hidden md:block" : "";\n  return (\n    <nav className="navbar">\n      <div className="brand-wrapper">\n        <a className="brand" href="/">\n          <TailzupLogo color="orange" />\n        </a>\n      </div>\n      <div\n        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n      >\n        <div id="items" className="items-strip">\n          <div id="left" className="items-left">\n            <input\n              className="text-input"\n              type="email"\n              placeholder="Find Donald or something..."\n            />\n            <SearchIcon />\n          </div>\n          <div id="right">\n            <ul className="items-list">\n              <li className="nav-item md:order-last">\n                <a href="/">\n                  <Avatar />\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Home\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Friends\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Messages\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div\n        className={`absolute top-3 right-4 p-1 border border-orange-400 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-orange-200`}\n        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n      >\n        <a href="/">\n          <HamburgerIcon />\n        </a>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<SearchIcon />"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<Avatar />")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"<HanburgerIcon />")," icons contain ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," elements produced from Heroicons. They are available in this folder: ",(0,t.yg)("inlineCode",{parentName:"p"},"src/components/icons/"),". However, we will be replacing them with actual Heroicon React components."),(0,t.yg)("h3",{id:"styles"},"Styles"),(0,t.yg)("p",null,"All the classes used on the components are styled with regular Tailwind and CSS classes. You can find them in this stylesheet:"),(0,t.yg)("details",null,(0,t.yg)("summary",null,"src/styles/styles.css"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles/styles.css"',title:'"src/styles/styles.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  --primary-color: rgb(223, 232, 247);\n  --secondary-color: rgb(182, 76, 27);\n  --grayscale: rgb(226, 218, 218);\n  --friendly: green;\n  --neutral: blue;\n  --warning: yellow;\n  --danger: crimson;\n  --forbidden: black;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 450px;\n}\n\n.navbar {\n  @apply sticky top-0 mx-auto px-2 w-full h-auto bg-slate-600 flex flex-col justify-start md:flex-row md:justify-between md:items-center;\n}\n\n.brand-wrapper {\n  @apply h-14 bg-slate-600 w-full flex justify-start items-center flex-1 self-start;\n}\n\n.brand {\n  max-width: 12rem;\n  color: var(--primary-color);\n  @apply text-4xl p-2;\n}\n\n.items-strip {\n  @apply my-2 flex flex-col justify-start items-start md:flex-row md:justify-start md:items-center;\n}\n\n.items-left {\n  @apply mx-2 p-2 order-last md:order-none flex justify-center items-center;\n}\n\n.items-list {\n  @apply flex flex-col md:flex-row md:justify-start md:items-center;\n}\n\n.nav-item {\n  @apply mx-2 p-1 rounded lg:mx-8 w-full lg:w-auto hover:scale-105 hover:backdrop-brightness-125 hover:shadow transition-all;\n}\n\n.nav-link {\n  @apply text-center p-1 flex justify-start items-center;\n}\n\n.text-input {\n  @apply py-0.5 px-2 border rounded-l text-slate-800;\n}\n\n.avatar {\n  width: 2rem;\n  height: 2rem;\n  color: whitesmoke;\n}\n\n.icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: whitesmoke;\n}\n\n.tailzup-logo {\n  width: 4rem;\n  height: 4rem;\n}\n\n.glow {\n  animation: glow 0.8s alternate infinite;\n}\n\n@keyframes glow {\n  0% {\n    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(\n        0 0 3px #ff80b3\n      ) drop-shadow(0 0 4px #ff4d94) drop-shadow(0 0 5px #ff0066);\n  }\n  29% {\n    filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #fff) drop-shadow(\n        0 0 6px #ff80b3\n      ) drop-shadow(0 0 8px #ff4d94) drop-shadow(0 0 10px #ff0066);\n  }\n\n  92% {\n    filter: drop-shadow(0 0 3px #fff) drop-shadow(0 0 6px #fff) drop-shadow(\n        0 0 9px #ff80b3\n      ) drop-shadow(0 0 12px #ff4d94) drop-shadow(0 0 15px #ff0066);\n  }\n}\n"))),(0,t.yg)("p",null,"The navbar now looks like this:"),(0,t.yg)("div",{className:"centered-image"},(0,t.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-18-heroicons/navbar-initial2.gif",alt:"tailwind flex"})),(0,t.yg)("br",null),(0,t.yg)("h3",{id:"adding-and-styling-heroicons-with-tailwindcss"},"Adding and Styling Heroicons with TailwindCSS"),(0,t.yg)("p",null,"We'll replace the existing icons with Heroicons components. So, let's import and replace:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title= "src/components/navbar/Navbar.tsx"',title:"",'"src/components/navbar/Navbar.tsx"':!0},'import React, { useState } from "react";\nimport TailzupLogo from "../icons/TailzupLogo";\n//highlight-next-line\nimport {\n  Bars4Icon,\n  MagnifyingGlassIcon,\n  UserIcon,\n} from "@heroicons/react/24/outline";\n\nconst Navbar = () => {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const menuHidden = !isMobileMenuOpen ? "hidden md:block" : "";\n  return (\n    <nav className="navbar">\n      <div className="brand-wrapper">\n        <a className="brand" href="/">\n          <TailzupLogo color="orange" />\n        </a>\n      </div>\n      <div\n        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n      >\n        <div id="items" className="items-strip">\n          <div id="left" className="items-left">\n            <input\n              className="text-input"\n              type="email"\n              placeholder="Find donald trump or something..."\n            />\n            {/*highlight-next-line*/}\n            <MagnifyingGlassIcon className="h-6 w-6 mx-1 stroke-orange-400" />\n          </div>\n          <div id="right">\n            <ul className="items-list">\n              <li className="nav-item md:order-last">\n                <a href="/">\n                  {/*highlight-next-line*/}\n                  <UserIcon\n                    className="h-8 w-8 glow"\n                    stroke="pink"\n                    strokeWidth={1.2}\n                  />\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Home\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Friends\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Messages\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div\n        className={`absolute top-3 right-4 p-1 border border-orange-400 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-orange-200`}\n        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n      >\n        <a href="/">\n          {/*highlight-next-line*/}\n          <Bars4Icon className="h-6 w-6 stroke-orange-400" />\n        </a>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;\n')),(0,t.yg)("p",null,"With the Heroicon Reract components, everything should remain unchanged."),(0,t.yg)("p",null,"Notice that we are passing CSS classes with the ",(0,t.yg)("inlineCode",{parentName:"p"},"className")," prop to the following Heroicons components: ",(0,t.yg)("inlineCode",{parentName:"p"},"<MagnifyingGlassIcon />"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<UserIcon />")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"<Bars4Icon />"),". The classes then get relayed to the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," element produced by the Heroicon. Effortlessly."),(0,t.yg)("p",null,"As discussed below, we are using three types of CSS classes."),(0,t.yg)("h3",{id:"using-regular-tailwindcss-utilities-with-heroicons"},"Using Regular TailwindCSS Utilities with Heroicons"),(0,t.yg)("p",null,"We can use regular Tailwind CSS utilities like ",(0,t.yg)("inlineCode",{parentName:"p"},"h-6 w-6"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'<MagnifyingGlassIcon className="h-6 w-6 mx-1 stroke-orange-400" />\n')),(0,t.yg)("p",null,"In this case, we are using spacing utilities for height, width and margin."),(0,t.yg)("h3",{id:"using-svg-related-tailwindcss-utilities-with-heroicons"},"Using ",(0,t.yg)("inlineCode",{parentName:"h3"},"SVG")," Related TailwindCSS Utilities with Heroicons"),(0,t.yg)("p",null,"We have also used a ",(0,t.yg)("inlineCode",{parentName:"p"},"SVG")," related TailwindCSS class in the ",(0,t.yg)("inlineCode",{parentName:"p"},"<MagnifyingGlassIcon />")," component - ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke-orange-400")," to set the stroke of the icon."),(0,t.yg)("p",null,"Another example is this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'<Bars4Icon className="h-6 w-6 stroke-orange-400" />\n')),(0,t.yg)("p",null,"Internally, ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke-{color}-{saturation}")," value is relayed to the ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke")," property of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>"),' element with `stroke= "currentColor```.'),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-html"},'<svg fill="none" stroke="currentColor"></svg>\n')),(0,t.yg)("h3",{id:"using-non-tailwindcss-classes-with-heroicons"},"Using non-TailwindCSS Classes with Heroicons"),(0,t.yg)("p",null,"We can use non-Tailwind classes as well:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'<UserIcon className="h-8 w-8 glow" stroke="pink" strokeWidth={1.2} />\n')),(0,t.yg)("p",null,"For the ",(0,t.yg)("inlineCode",{parentName:"p"},"<UserIcon />"),", we are applying a ",(0,t.yg)("inlineCode",{parentName:"p"},"glow")," class that animates the icon with a glow ",(0,t.yg)("inlineCode",{parentName:"p"},"filter"),". It's completely custom CSS and looks like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-css"},".glow {\n  animation: glow 0.8s alternate infinite;\n}\n\n@keyframes glow {\n  0% {\n    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(\n        0 0 3px #ff80b3\n      ) drop-shadow(0 0 4px #ff4d94) drop-shadow(0 0 5px #ff0066);\n  }\n  29% {\n    filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #fff) drop-shadow(\n        0 0 6px #ff80b3\n      ) drop-shadow(0 0 8px #ff4d94) drop-shadow(0 0 10px #ff0066);\n  }\n\n  92% {\n    filter: drop-shadow(0 0 3px #fff) drop-shadow(0 0 6px #fff) drop-shadow(\n        0 0 9px #ff80b3\n      ) drop-shadow(0 0 12px #ff4d94) drop-shadow(0 0 15px #ff0066);\n  }\n}\n")),(0,t.yg)("p",null,"With the above changes Heroicons and their styles, the navbar looks like this:"),(0,t.yg)("div",{className:"centered-image"},(0,t.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-18-heroicons/navbar-heroicons2.gif",alt:"tailwind flex"})),(0,t.yg)("br",null),(0,t.yg)("h3",{id:"applying-native-svg-properties-to-heroicons"},"Applying Native ",(0,t.yg)("inlineCode",{parentName:"h3"},"<svg>")," Properties to Heroicons"),(0,t.yg)("p",null,"Notice also that we are applying ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"strokeWidth")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"<UserIcon />"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'<UserIcon className="h-8 w-8 glow" stroke="pink" strokeWidth={1.2} />\n')),(0,t.yg)("p",null,"Native ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," properties passed to Heroicons also get relayed to the ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>")," element inside."),(0,t.yg)("h3",{id:"applying-responsive-tailwindcss-utils-to-heroicons"},"Applying Responsive TailwindCSS Utils to Heroicons"),(0,t.yg)("p",null,"Okay. Now, we'll consider the case for responsive use of Heroicons. We want each nav item to have its own icon left of its text. Like this:"),(0,t.yg)("div",{className:"centered-image"},(0,t.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-18-heroicons/icon-items.gif",alt:"tailwind flex"})),(0,t.yg)("br",null),(0,t.yg)("p",null,"So, we'll go ahead and add the icons for each nav item:"),(0,t.yg)("details",null,(0,t.yg)("summary",null,"Show Navbar.tsx"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/navbar/Navbar.tsx"',title:'"src/components/navbar/Navbar.tsx"'},'import React, { useState } from "react";\nimport TailzupLogo from "../icons/TailzupLogo";\nimport {\n  Bars4Icon,\n  ChatBubbleLeftRightIcon,\n  HomeIcon,\n  MagnifyingGlassIcon,\n  UserGroupIcon,\n  UserIcon,\n} from "@heroicons/react/24/outline";\n\nconst Navbar = () => {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const menuHidden = !isMobileMenuOpen ? "hidden md:block" : "";\n  return (\n    <nav className="navbar">\n      <div className="brand-wrapper">\n        <a className="brand" href="/">\n          <TailzupLogo color="orange" />\n        </a>\n      </div>\n      <div\n        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n      >\n        <div id="items" className="items-strip">\n          <div id="left" className="items-left">\n            <input\n              className="text-input"\n              type="email"\n              placeholder="Find Donald  or something..."\n            />\n            <MagnifyingGlassIcon className="h-6 w-6 mx-1 stroke-orange-400" />\n          </div>\n          <div id="right">\n            <ul className="items-list">\n              <li className="nav-item md:order-last">\n                <a href="/">\n                  <UserIcon\n                    className="h-8 w-8 glow"\n                    stroke="pink"\n                    strokeWidth={1.2}\n                  />\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  {/*highlight-next-line*/}\n                  <HomeIcon className="h-6 w-6 md:hidden lg:block" />\n                  <span className="mx-2">Home</span>\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  {/*highlight-next-line*/}\n                  <UserGroupIcon className="h-6 w-6 md:hidden lg:block" />\n                  <span className="mx-2">Friends</span>\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  {/*highlight-next-line*/}\n                  <ChatBubbleLeftRightIcon className="h-6 w-6 md:hidden lg:block" />\n                  <span className="mx-2">Messages</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div\n        className={`absolute top-3 right-4 p-1 border border-orange-400 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-orange-200`}\n        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n      >\n        <a href="/">\n          <Bars4Icon className="h-6 w-6 stroke-orange-400" />\n        </a>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;\n'))),(0,t.yg)("p",null,"With ",(0,t.yg)("inlineCode",{parentName:"p"},"md:hidden lg:block")," we are changing the visibility of the icon using responsive classes for each nav item. At ",(0,t.yg)("inlineCode",{parentName:"p"},"md"),", we want the icon to be hidden and show up back at ",(0,t.yg)("inlineCode",{parentName:"p"},"lg"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'<UserGroupIcon className="h-6 w-6 md:hidden lg:block" />\n')),(0,t.yg)("h2",{id:"summary"},"Summary"),(0,t.yg)("p",null,"In this post, we quickly picked how to use Heroicons with TailwindCSS and non-Tailwind classes. We found that Heroicons produce an ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg")," element which receives styles from the JSX component via ",(0,t.yg)("inlineCode",{parentName:"p"},"className"),", and other native properties like ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"fill"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"height"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"width"),", etc. We saw that, in order to style a Heroicon ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>"),", we can pass related TailwindCSS classes like ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke-{color}-{saturation}")," and non Tailwind classes to ",(0,t.yg)("inlineCode",{parentName:"p"},"className")," prop of the Heroicon component. We can also pass properties like ",(0,t.yg)("inlineCode",{parentName:"p"},"stroke"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"fill"),", etc., to a Heroicon to style its ",(0,t.yg)("inlineCode",{parentName:"p"},"<svg>"),". As usual, Heroicons can also be manipulated using responsive classes."))}h.isMDXComponent=!0}}]);