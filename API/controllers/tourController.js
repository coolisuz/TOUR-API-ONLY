const Tour = require('../models/tourModel');
const ApiFeatures = require('../utils/apiFeatures')

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty'
  next();
}

exports.getAllTours = async (req, res) => {
 try {
  const features = new ApiFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  
  const tours = await features.query
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

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({
      name: req.body.name,
      rating: req.body.rating,
      price: req.body.price,
      duration: req.body.duration,
      maxGroupSize: req.body.maxGroupSize,
      difficulty: req.body.difficulty,
      ratingsAverage: req.body.ratingsAverage,
      ratingsQuantity: req.body.ratingsQuantity,
      priceDiscount: req.body.priceDiscount,
      summary: req.body.summary,
      discount: req.body.discount, 
      imageCover: req.body.imageCover,
      createdAt: req.body.createdAt
    });

    res.status(200).json({
      status: "success",
      data: { newTour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { tour }
    });
  } 

  catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true
    })

    res.status(200).json({
      status: 'success',
      data: { tour }
    })
  } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "success",
      message: "Deleted Tour",
    });
  } catch (error) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
  }
};    

