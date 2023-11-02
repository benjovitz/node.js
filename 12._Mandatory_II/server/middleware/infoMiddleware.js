


function checkCookie(req, res, next){
    if(!req.session.user){
        res.sendStatus(401)
    }else{
        next()
    }
}

export {checkCookie}