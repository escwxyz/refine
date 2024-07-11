"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97313],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=g(t),u=o,h=l["".concat(s,".").concat(u)]||l[u]||m[u]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var g=2;g<a;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>P,frontMatter:()=>p,metadata:()=>g,toc:()=>l});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"auth-pages",title:"3. Auth Pages",tutorial:{prev:"3.xx.xx/tutorial/understanding-authprovider/create-authprovider",next:!1}},s=void 0,g={unversionedId:"tutorial/understanding-authprovider/chakra-ui/auth-pages",id:"version-3.xx.xx/tutorial/understanding-authprovider/chakra-ui/auth-pages",title:"3. Auth Pages",description:"In this section, we will learn how to create auth pages such as login, signup, forgot password and reset password using the `` component.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/5-understanding-authprovider/chakra-ui/2-auth-pages.md",sourceDirName:"tutorial/5-understanding-authprovider/chakra-ui",slug:"/tutorial/understanding-authprovider/chakra-ui/auth-pages",permalink:"/docs/3.xx.xx/tutorial/understanding-authprovider/chakra-ui/auth-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/5-understanding-authprovider/chakra-ui/2-auth-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720684844,formattedLastUpdatedAt:"Jul 11, 2024",sidebarPosition:2,frontMatter:{id:"auth-pages",title:"3. Auth Pages",tutorial:{prev:"3.xx.xx/tutorial/understanding-authprovider/create-authprovider",next:!1}}},d={},l=[{value:"Login Page",id:"login-page",level:2},{value:"Register Page",id:"register-page",level:2},{value:"Forgot Password Page",id:"forgot-password-page",level:2},{value:"Update Password Page",id:"update-password-page",level:2},{value:"Customizing Auth Pages",id:"customizing-auth-pages",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},u=m("DocThumbsUpDownFeedbackWidget"),h=m("Checklist"),c=m("ChecklistItem"),y={toc:l},f="wrapper";function P(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'window.__refineAuthStatus = false;\n\nconst authProvider = {\n  login: (params) => {\n    window.__refineAuthStatus = true;\n    console.log("login: ", params);\n    return Promise.resolve();\n  },\n  register: (params) => {\n    console.log("register: ", params);\n    return Promise.resolve();\n  },\n  forgotPassword: () => {\n    console.log("forgotPassword: ", params);\n    return Promise.resolve();\n  },\n  updatePassword: () => {\n    console.log("updatePassword: ", params);\n    return Promise.resolve();\n  },\n  logout: () => {\n    window.__refineAuthStatus = false;\n  },\n  checkAuth: () =>\n    window.__refineAuthStatus ? Promise.resolve() : Promise.reject(),\n  checkError: () => Promise.resolve(),\n  getPermissions: () => Promise.resolve(),\n  getUserIdentity: () => Promise.resolve(),\n};\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n  AuthPage,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        authProvider={authProvider}\n        routerProvider={{\n          ...routerProvider,\n          routes: [\n            { path: "/login", element: <AuthPage /> },\n            {\n              path: "/register",\n              element: <AuthPage type="register" />,\n            },\n            {\n              path: "/forgot-password",\n              element: <AuthPage type="forgotPassword" />,\n            },\n            {\n              path: "/update-password",\n              element: <AuthPage type="updatePassword" />,\n            },\n          ],\n        }}\n        notificationProvider={notificationProvider()}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",null,"In this section, we will learn how to create auth pages such as login, signup, forgot password and reset password using the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/chakra-auth-page"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<AuthPage/>")," documentation for more information ","\u2192")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component provides auth pages for login, signup, forgot password and reset password. It also provides a way to customize theses pages with various props. So, ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," is a quick starting point for creating auth pages."),(0,r.yg)("p",null,"Before using ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component, we need to create an auth provider because ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component uses the auth provider to perform auth operations. However, we have already created an auth provider in the previous section. So, we will use the same auth provider for this section."),(0,r.yg)("p",null,"Let's create the auth pages step by step."),(0,r.yg)("h2",{id:"login-page"},"Login Page"),(0,r.yg)(u,{id:"login-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Login page is used to authenticate users. It provides a basic form to enter email, password and remember. After submitting the form, it sends the email, password and remember to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," method via ",(0,r.yg)("inlineCode",{parentName:"p"},"useLogin")," hook."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file and import the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@pankod/refine-chakra-ui";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"routes")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        //highlight-start\n        routerProvider={{\n          ...routerProvider,\n          routes: [{ path: "/login", element: <AuthPage /> }],\n        }}\n        //highlight-end\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            edit: BlogPostEdit,\n            show: BlogPostShow,\n            create: BlogPostCreate,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",{parentName:"li"},"By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component renders the login page. So, we don't need to pass any props to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When the user submits the login form, it passes the email, password and remember to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," method like below:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    login: ({ email, password, remember }) => {\n        ...\n    },\n    ...\n};\n")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the app and navigate to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/login")," page."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/login",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\nrender(<App />);\n')),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can also use the ",(0,r.yg)("inlineCode",{parentName:"p"},"LoginPage")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component to render the login page."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Refine\n    authProvider={authProvider}\n    routerProvider={routerProvider}\n    ...\n    //highlight-start\n    LoginPage={AuthPage}\n    //highlight-end\n/>\n")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config/#loginpage"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information ","\u2192")))),(0,r.yg)("h2",{id:"register-page"},"Register Page"),(0,r.yg)(u,{id:"register-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Register page is used to register new users. It provides a basic form to enter email and password. After submitting the form, it sends the email and password to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," method via ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file and add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"routes")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={{\n          ...routerProvider,\n          routes: [\n            { path: "/login", element: <AuthPage /> },\n            //highlight-start\n            {\n              path: "/register",\n              element: <AuthPage type="register" />,\n            },\n            //highlight-end\n          ],\n        }}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            edit: BlogPostEdit,\n            show: BlogPostShow,\n            create: BlogPostCreate,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",{parentName:"li"},"We need to pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," prop to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the register page."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When the user submits the register form, it passes the email and password to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," method like below:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    register: ({ email, password }) => {\n        ...\n    },\n    ...\n};\n")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the app and navigate to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/register")," page."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/register",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/register"},'setInitialRoutes(["/register"]);\n\nrender(<App />);\n'))),(0,r.yg)("h2",{id:"forgot-password-page"},"Forgot Password Page"),(0,r.yg)(u,{id:"forgot-password-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Forgot password page is used to send a reset password link to the user's email. It provides a basic form to enter email. After submitting the form, it sends the email to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method via ",(0,r.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file and add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"routes")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={{\n          ...routerProvider,\n          routes: [\n            { path: "/login", element: <AuthPage /> },\n            {\n              path: "/register",\n              element: <AuthPage type="register" />,\n            },\n            //highlight-start\n            {\n              path: "/forgot-password",\n              element: <AuthPage type="forgotPassword" />,\n            },\n            //highlight-end\n          ],\n        }}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            edit: BlogPostEdit,\n            show: BlogPostShow,\n            create: BlogPostCreate,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",{parentName:"li"},"We need to pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"forgotPassword")," prop to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the forgot password page."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When the user submits the forgot password form, it passes the email to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method like below:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"\nconst authProvider = {\n    forgotPassword: ({ email }) => {\n        ...\n    },\n    ...\n};\n")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the app and navigate to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/forgot-password")," page."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/forgot-password",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\n\nrender(<App />);\n'))),(0,r.yg)("h2",{id:"update-password-page"},"Update Password Page"),(0,r.yg)(u,{id:"update-password-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Update password page is used to update the user's password. It provides a basic form to enter new password and confirm password. After submitting the form, it sends the new password and confirm password to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method via ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file and add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"routes")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={{\n          ...routerProvider,\n          routes: [\n            { path: "/login", element: <AuthPage /> },\n            {\n              path: "/register",\n              element: <AuthPage type="register" />,\n            },\n            {\n              path: "/forgot-password",\n              element: <AuthPage type="forgotPassword" />,\n            },\n            //highlight-start\n            {\n              path: "/update-password",\n              element: <AuthPage type="updatePassword" />,\n            },\n            //highlight-end\n          ],\n        }}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            edit: BlogPostEdit,\n            show: BlogPostShow,\n            create: BlogPostCreate,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",{parentName:"li"},"We need to pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," prop to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the update password page."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When the user submits the update password form, it passes the new password and confirm password to the auth provider's ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," method like below:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    updatePassword: ({ password, confirmPassword }) => {\n        ...\n    },\n    ...\n};\n")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the app and navigate to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/update-password")," page."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/update-password",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\n\nrender(<App />);\n'))),(0,r.yg)("h2",{id:"customizing-auth-pages"},"Customizing Auth Pages"),(0,r.yg)(u,{id:"customizing-auth-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can customize the auth pages by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage/>")," component's props. Also, you can use ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli/"},(0,r.yg)("inlineCode",{parentName:"a"},"refine-cli"))," to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli/#swizzle"},"swizzle")," the auth pages."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/chakra-auth-page/#props"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<AuthPage/>")," component's props to customize the auth pages ","\u2192")),(0,r.yg)("p",null,"When you swizzle the auth pages, default auth pages will be copied to the ",(0,r.yg)("inlineCode",{parentName:"p"},"components/pages/auth")," folder. You can customize the auth pages as you want by editing the files."),(0,r.yg)("p",null,"Let's customize the auth pages."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the following command in the project directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," package."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    ? Which package do you want to swizzle?\n    UI Framework\n    \u276f  @pankod/refine-chakra-ui\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the ",(0,r.yg)("inlineCode",{parentName:"p"},"AuthPage")," component."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    ? Which component do you want to swizzle?\n    Pages\n       ErrorPage\n    \u276f  AuthPage\n")))),(0,r.yg)("p",null,"After swizzling the auth pages, you will show the success message like below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    Successfully swizzled AuthPage\n\n    Files created:\n    - src/components/pages/auth/index.tsx\n    - src/components/pages/auth/components/forgotPassword.tsx\n    - src/components/pages/auth/components/login.tsx\n    - src/components/pages/auth/components/register.tsx\n    - src/components/pages/auth/components/updatePassword.tsx\n    - src/components/pages/auth/components/index.tsx\n    - src/components/pages/auth/components/styles.ts\n    ...\n")),(0,r.yg)("p",null,"Now, you can customize the auth pages by editing the files in the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/components/pages/auth")," folder."),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)(h,{mdxType:"Checklist"},(0,r.yg)(c,{id:"auth-provider-chakra-ui-auth-pages",mdxType:"ChecklistItem"},"I understood how to use AuthPage component to render auth pages."),(0,r.yg)(c,{id:"auth-provider-chakra-ui-auth-pages-2",mdxType:"ChecklistItem"},"I understood how to customize auth pages."))))}P.isMDXComponent=!0}}]);