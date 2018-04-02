const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({});
Player = mongoose.model('Basketballplayer', playerSchema);


exports.findAll = (req, res, next) => {
    Player.findOne({})
      .exec()
      .then(docs => {
          const playerList = docs.toObject().players;
          let count = playerList.length;
          let totalAge = 0;
          playerList.forEach(player => {
              if(player.age){
                  totalAge += player.age;
              } else{
                  count--;
              }
          });

          const avgAge = totalAge/count;
          let response = [];

          playerList.forEach(player => {
              if(player.age && player.firstname && player.lastname){
                response.push({
                    id: player.id,
                    name_brief: player.firstname + ' ' +  player.lastname.charAt(0) + '.',
                    age: player.age,
                    first_name: player.firstname,
                    last_name: player.lastname,
                    position: player.position,
                    average_position_age_diff: Math.abs(player.age - avgAge)});
              }
          });
        res.status(200).json({
            count: count,
            players: response});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }


  exports.getPlayer = (req, res, next) => {
    const id = req.params.playerId;
    Player.findOne({})
      .exec()
      .then(docs => {
        const playerList = docs.toObject().players;
        
        let count = playerList.length;
        let totalAge = 0;
        playerList.forEach(player => {
            if(player.age){
                totalAge += player.age;
            } else{
                count--;
            }
        });
        
        const avgAge = totalAge/count;

        const responsePlayer = playerList.find(element => element.id === id);


        if (responsePlayer) {
          res.status(200).json({
            id: responsePlayer.id,
            name_brief: responsePlayer.firstname + ' ' + responsePlayer.lastname.charAt(0) + '.',
            age: responsePlayer.age,
            first_name: responsePlayer.firstname,
            last_name: responsePlayer.lastname,
            position: responsePlayer.position,
            average_position_age_diff: Math.abs(responsePlayer.age - avgAge)});
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
}

