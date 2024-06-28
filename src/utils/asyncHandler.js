// const asyncHandler = (fn) => async (req, res, next ) => {
//     try{
//         await fn(req, res, next)
//     }catch{
//         res.status(err.code || 400).json({
//             success : false,
//             message: err.message,
//         })
//     }
// }


// export {asyncHandler}

// done in try catch method 

// now let's see how it's done in promise .then method

const asyncHandler = (requestHandler) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch(err => next(err))
    }
}

 