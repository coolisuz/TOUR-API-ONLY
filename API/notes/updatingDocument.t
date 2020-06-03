second parameter is options.  
     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true
    })


    
    findByIdAndUpdate // returns query object