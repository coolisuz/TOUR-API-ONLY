// localhost:5000/api/v1/tours?duration=5&difficulty=easy

// whatever after ? mark is query parameter and is available
// in "req.query" in express as an object


exports.getAllTours = async (req, res) => {
 try{
      //  copying req.query into a new queryObj without mutating req.query
      const queryObj = { ...req.query };

      const excludedFields = ["page", "sort", "limit", "fields"];

      // here Im deleting all key/value that are in excludedFields array
      excludedFields.forEach((el) => delete queryObj[el]);

      let queryStr = JSON.stringify(queryObj); //turning object into string format
      console.log(queryStr); // { difficulty: 'easy', duration: { 'gte': '5' } }

      
      // localhost:5000/api/v1/tours?difficulty=easy&page=2&sort=1&limit=10&duration[gte]=5
      // everything that is like gte|gt|lte|lt will have $ sign in front
      // so i can make that query to mongoose
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)/g, (match) => `$${match}`);

      console.log(JSON.parse(queryStr)); // =>  { difficulty: 'easy', duration: { '$gte': '5' } }
      const query = Tour.find(queryObj); // that returns a query. That means I can do .sort().filter()

      const tours = await query;

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