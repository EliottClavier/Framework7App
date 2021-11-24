var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/shop',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
        componentUrl: "./pages/shop.html",
      },
        {
          props: {
            recipes: []
          }
        });
    }
  },
  {
    path: '/shop/:letter',
    async: async function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/shop.html",
        },
        {
          props: {
            paramLetter: to.params.letter,
            recipes: await getRecipesByLetter(to.params.letter)
          }
        });
    }
  },
  {
    path: '/basket',
    async: function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/basket.html",
      });
    },
  },
  {
    path: '/profile',
    url: './pages/profile.html',
  },
  {
    path: '/recipe/:recipeId',
    async: async function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/recipe-detail.html",},
        {
          props: {
            recipe: await getRecipeById(to.params.recipeId),
          }
        });
    }
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
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
