module.exports = function(app, data){
    
    app.get("/api/friends", function(req, res){
        return res.json(data);
    });
  
    app.post("/api/friends", function(req, res){
        const newFriend = req.body;
        
        for(const i = 0; i<newFriend.scores.length; i++){
            const string = newFriend.scores[i];
            const int = parseInt(string);
            newFriend.scores.splice(i,1,int);
        }
        
        data.push(newFriend);
        res.json(newFriend);
    });
  }