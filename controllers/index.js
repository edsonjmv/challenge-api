let favorites = [];

exports.getFavorites = function(req, res) {
  var response = {
    results: favorites
  };
  res.setHeader('content-Type', 'Application/json');
  res.status(200).json(response);
};

exports.postFavorite = function(req, res) {
  const {user} = req.body;
  favorites = [...favorites, user];
  res.setHeader('content-Type', 'Application/json');
  res.status(200).json(user);
};

exports.deleteFavorite = function(req, res) {
  const {user} = req.body;
  favorites = favorites.filter(({email}) => user.email !== email);
  res.setHeader('content-Type', 'Application/json');
  res.status(200).json(user);
};
