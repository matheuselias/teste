exports.index = function(req, res){
  res.render('index', {title: 'Express'});
};

exports.teste = function(req, res){
  res.render('teste');
};