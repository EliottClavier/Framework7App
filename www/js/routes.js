var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/recipes',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
        componentUrl: "./pages/recipes.html",
      },
        {
          props: {
            recipes: []
          }
        });
    }
  },
  {
    path: '/recipes/:letter',
    async: async function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/recipes.html",
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
    path: '/favoris',
    async: function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      app.preloader.hide();

      resolve({
          componentUrl: "./pages/favoris.html",
      });
    },
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
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
