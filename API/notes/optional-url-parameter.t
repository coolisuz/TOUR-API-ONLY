# question mark makes the parameter optional
app.get("/api/v1/tours/:id?") 

# how to retrieve url parameter?
app.get("/api/v1/tours/:id", (req, res) => {
    # id in the url is string type
    const id = req.params.id * 1
}) 

// thats a middleware to get the parameter out of url
// with the name. And it does not run to regular param urls without parameter
router.param('id', (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    next()
})
