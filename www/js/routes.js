var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/shop',
    url: './pages/shop.html',

    async: function () {
      app.request({
        url: "https://www.themealdb.com/api/json/v1/1/search.php?f=b",
        method: "GET",
        dataType: "json",
        beforeSend: function () {
          app.preloader.show();
        },
        success: function (data) {
          app.preloader.hide();
          for (let index = 0; index < 1; index++) {
            console.log(data)
            console.log(data.meals)
          }
        },
      })
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
              componentUrl: "./pages/recipe-detail.html",},
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
