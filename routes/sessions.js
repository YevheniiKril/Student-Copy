const {  new: _new, create, delete: _delete } = require('../controllers/SessionsController');


  // Step 1: Setup the necessary routes for login, authenticate, and logout
  module.exports = router => {
    router.get('/login', _new);
    router.post('/authenticate', create);
    router.get('/logout', _delete);
  };
