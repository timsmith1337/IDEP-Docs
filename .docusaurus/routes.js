
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','de6'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','00d'),
  exact: true,
},
{
  path: '/Branding-guide',
  component: ComponentCreator('/Branding-guide','888'),
  exact: true,
},
{
  path: '/FAQ',
  component: ComponentCreator('/FAQ','5a3'),
  exact: true,
},
{
  path: '/IPFS',
  component: ComponentCreator('/IPFS','9ba'),
  exact: true,
},
{
  path: '/license',
  component: ComponentCreator('/license','727'),
  exact: true,
},
{
  path: '/Litepaper',
  component: ComponentCreator('/Litepaper','399'),
  exact: true,
},
{
  path: '/Modules',
  component: ComponentCreator('/Modules','808'),
  exact: true,
},
{
  path: '/Roadmap',
  component: ComponentCreator('/Roadmap','d35'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];