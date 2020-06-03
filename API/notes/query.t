there two ways of writing queries:
    1) Mongodb
    2) Mongoose

/////////////////////// MONGODB METHOD /////////////////////////////////////
    
exports.getAllTours = async (req, res) => {
 try{
   console.log(req.query)
   
   #querying
   const tours = await Tour.find({
       duration: req.params.duration,
       difficulty: req.params.difficulty
   });

  OR 
  const tours = await Tour.find(req.params) 
   res.status(200).json({
     status: "success",
     results: tours.length,
     data: { tours },
   });
 } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
 }
}
//////////////////////////////////////////////////////////////////////////////


/////////////////////// MONGOOSE METHOD /////////////////////////////////////

const tours = await Tour.find({})
  .where('duration').equals(req.params.duration)
  .where('difficulty').equals(req.params.difficulty)
  
//////////////////////////////////////////////////////////////////////////////



const queryObj = { ...req.query } // copying req.query object and saving to new object
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach( el => delete queryObj[el]) 
  
localhost:5000/api/v1/tours?difficulty=easy&page=2&sort=1&limit=10
ignoring all the fields inside excludedFields array


//////////////////////////////////////////////////////////////////////////////
#"-" sign before the query return descending order
localhost:5000/api/v1/tours?sort=-price

