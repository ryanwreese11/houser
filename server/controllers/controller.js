module.exports = {




  seeAll: (req, res) => {
    req.app.get('db')
      .see_homes()
      .then((houses) => {
        res.status(200).send(houses)
      })
      .catch(err => {
        res.status(418).send('Seomthing went wrong');
        console.log(err)
      })
  },

  createHouse: (req, res) => {
    const { name, address, city, state, zip } = req.body
    console.log('is this working',req.body)
    req.app.get('db')
      .create_house([name, address, city, state, zip])
      .then(() => {
        res.status(200).send('New Listing Created')
      })
      .catch(err => {
        res.status(404).send('Seomthing went wrong');
        console.log(err)
      })
  },

  deleteHouse: (req, res) => {
    const { id } = req.params
    req.app.get('db')
      .delete_house(id)
      .then(() => {
        res.status(200).send('all good')
      })
      .catch(err => {
        res.status(404).send('Seomthing went wrong');
        console.log(err)
      })
  }


}