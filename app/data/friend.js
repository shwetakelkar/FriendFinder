var friends =
[{
    name:"John",
    photo:"https://png.pngtree.com/png-clipart/20190612/original/pngtree-star-link-png-image_3474729.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name:"Jack",
    photo:"https://png.pngtree.com/png-clipart/20190516/original/pngtree-space-rocket-flying-in-space-with-star-background-png-image_3557721.jpg",
    scores:[
        5,
        1,
        3,
        4,
        2,
        1,
        2,
        5,
        4,
        3
      ]

  }]

  exports.list = function(req,res){
    res.json(friends);
  }

  exports.friendCreate = function(req,res){

    
    var newfriend= req.body;
    
    var bestDiff = 100;
    var bestIndex = 0;
    
    for(var i=0;i<friends.length;i++){
    
      var diff = 0;

      for(var j =0;j<friends[i].scores.length;j++){
         diff += Math.abs(friends[i].scores[j] - newfriend.scores[j]);
      }

      if(diff<bestDiff){
        bestDiff = diff;
        bestIndex = i;
      }

    };
    friends.push(newfriend);
    var responseObj = {name:friends[bestIndex].name,
                    photo:friends[bestIndex].photo}
    res.send(responseObj)

  }

