const getRecipeById = async (id) => {
  // Requête GET
  return await app.request.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then(
      r => {
        return JSON.parse(r.data).meals[0];
      },
      err => {
        console.log(err);
        return null;
      }
  );
};

const getRecipesByLetter = async (letter) => {
  // Requête GET
  return await app.request.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  )
    .then(
      r => {
        return JSON.parse(r.data).meals;
      },
      err => {
        console.log(err);
        return null;
      }
    );
};

const getRecipesBySearch = async (search) => {
  // Requête GET
  return await app.request.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  )
    .then(
      r => {
        return JSON.parse(r.data).meals;
      },
      err => {
        console.log(err);
        return null;
      }
    );
};
