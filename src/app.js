
function pageLanding(req, res){
    return res.sendFile(__dirname + '/index.html')
}

module.exports = pageLanding