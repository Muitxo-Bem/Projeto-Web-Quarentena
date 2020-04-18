module.exports = {
    tokenTest(req, res){
        res.send({ok:true, email: req.userEmail});
    }
}