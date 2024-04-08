function log(req,res,next){
     console.log("Logging....");
     next()
}

function auth(req,res,next){
     console.log("Autheticating....")
     next()
}
module.exports = log;
module.exports = auth;