export function checkCookie(req, res, next){
    if(!req.session.userId){
        res.sendStatus(401)
    }else{
        next()
    }
}
