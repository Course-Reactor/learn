export default [
  {
    path: '/',
    component: 'page-home',
    action: () => {
      import('./pages/page-home.js');
    },
  },
  {
    path: '/admin',
    component: 'page-admin',
    action: () => {
      import('./pages/page-admin.js');
    },
  },
];
