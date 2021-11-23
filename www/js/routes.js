
var routes = [
  {
    path: '/',
    url: './index.html',  
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/shop',
    url: './pages/shop.html',
  },
  {
    path: '/basket',
    url: './pages/basket.html',
  },
  {
    path: '/profile',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      // Show Preloader
      app.preloader.show();

      // Hide Preloader
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/profile.html",
      });
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
