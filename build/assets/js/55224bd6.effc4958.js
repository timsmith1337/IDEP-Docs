(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Denali1-183bced7d8661f0bc38221075c388ca5.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(102)),o={title:"Joining IDEP's Public Testnet Denali"},c={unversionedId:"Denali",id:"Denali",isDocsHomePage:!1,title:"Joining IDEP's Public Testnet Denali",description:"Denali",source:"@site/docs/Denali.md",slug:"/Denali",permalink:"/Denali",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/Denali.md",version:"current",sidebar:"docs",previous:{title:"Initialization",permalink:"/Initialization"},next:{title:"Keys",permalink:"/Keys"}},l=[{value:"Quick rundown",id:"quick-rundown",children:[]},{value:"Validator-Setup",id:"validator-setup",children:[]},{value:"FAQ",id:"faq",children:[]}],u={toc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Denali",src:n(153).default})),Object(i.b)("h2",{id:"quick-rundown"},"Quick rundown"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure you have completed the ",Object(i.b)("a",{parentName:"p",href:"/Installation"},"installation")," successfully.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Initialize your node with your moniker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Copy the genesis file from the IDEP repo and place it in the nodes config directory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start the node"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"iond init <moniker> --chain-id Test-Denali\n\niond keys add <accountname>\n\nwget https://raw.githubusercontent.com/IDEP-network/testnet-binaries/main/Denali-0.0.1/genesis.json?token=APTYVG5VFPHLIWZB6NPQSIDBDSF7O\n\nmv genesis.json ~/ion/config/\n\niond start --p2p.persistent_peers=95a7b71ab6ad8fad5f1ed3b49472683adea92cf1@142.93.65.220:26656,dc07da4be6ff285a1be2e9501fa92efef248d025@64.225.75.108:26656\n")),Object(i.b)("h2",{id:"validator-setup"},"Validator-Setup"),Object(i.b)("p",null,"Once the Full Node is up and running. Please share your IDEP address with the IDEP team. We will fund your address."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"You can @ or DM denny007#3282 on Discord.\n")),Object(i.b)("p",null,"To get your Public Address"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"iond keys list\n")),Object(i.b)("p",null,"To get the Validator-pub-key"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"iond tendermint show-validator\n")),Object(i.b)("p",null,"Command to create a Validator"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"iond tx staking create-validator --amount <amount> --from <from-address> --pubkey <validator-pub-key> --commission-rate 0.01 --commission-max-rate 0.05 --commission-max-change-rate 0.005 --min-self-delegation 1 --chain-id Test-Denali\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("p",null,"Example of a command to create a Validator"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"iond tx staking create-validator --amount 15000000000000idep --from idep1d2nqcwf9zz9fx7xlesyt0gc3utfxe2mk6nfwey --pubkey idepvalconspub1zcjduepqztw5yzm5wj0yc600aaemxlmda5488jv9hycxfnta3w7vz9jgpawqc9qnhs --commission-rate 0.01 --commission-max-rate 0.05 --commission-max-change-rate 0.005 --min-self-delegation 1 --chain-id Test-Denali\n")))}p.isMDXComponent=!0}}]);