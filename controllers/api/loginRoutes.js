const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log('Failed to get login route.')
        res.status(500).json(error);
    }
});
// Route to get all Users created in database
router.get('/users', async (req, res) => {
try {
    const users = await User.findAll();
    const allUsers = users.map((user) => user.get());
    console.log(allUsers);
    res.status(200);
}
catch (error) {
    console.error(error);
    res.status(500).json({message: 'failed to get all users'});
}
});




router.post('/', async (req, res) => {

    try {
      const username = req.body.name;
      const password = req.body.password;
  
      const userData = await User.findOne({ name: username } );
      if (!userData) {
        return       res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      }
      if (!userData.password === password) {
        console.log('Password is incorrect.')
      }
      else {
        console.log('Successful login');
      }
  
    } catch (error) {
      console.error('Failed to login.', error);
    }
  });


module.exports = router;