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
      // Show Preloader
      app.preloader.show();

      // Hide Preloader
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
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      // Show Preloader
      app.preloader.show();

      // Hide Preloader
      app.preloader.hide();

      app.request.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${to.params.letter}`
      )
        .then(r => {
          let recipes = JSON.parse(r.data).meals;
          resolve({
            componentUrl: "./pages/shop.html",
          },
            {
              props: {
                recipes: recipes
              }
            });
        });
    }
  },
  {
    path: '/basket',
    url: './pages/basket.html',
  },
  {
    path: '/profile',
    url: './pages/profile.html',
  },
  {
    path: '/recipe/:recipeId',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      // Show Preloader
      app.preloader.show();

      // Hide Preloader
      app.preloader.hide();

      // Requête GET
      app.request.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${to.params.recipeId}`
      )
        .then(r => {
          let recipe = JSON.parse(r.data).meals[0];
          resolve({
            componentUrl: "./pages/recipe-detail.html",
          },
            {
              props: {
                recipe: recipe
              }
            });
        });
    }
  },
  {
    path: '/request-and-load/user/:userId/',
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
