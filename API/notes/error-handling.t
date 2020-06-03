In async/await syntax we catch errors using try/catch. And Model validation 
error end up getting in catch block. Rejected Promise ends up being in catch block
 
 exports.create = async (req, res) => {
  try {
   .....
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};

