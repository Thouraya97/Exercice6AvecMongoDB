import  Game  from "../models/game.model.js";


export function add(req,res){
    const game = new Game({
        title: req.body.title,
        description:req.body.description,
price:req.body.price,
quantity:req.body.quantity
});
      game
        .save()
        .then(() => {
          console.log("added");
          res.status(200).json({ msg: "added" });
        })
        .catch((err) => {
          res.status(403).json({ msg: err });
        });
}



export function update (req,res){
    Game.findOneAndUpdate(
        { title: req.params.title },
        { $set: { price: req.body.price} },
        (err, result) => {
          if (err) return res.status(500).json({ msg: err });
          const msg = {
            msg: " successfully updated",
           title: req.params.title,
          };
          return res.json(msg);
        }
      );
}

export function getAll(req,res){
    }




















/* BlogPost.find({ username: { $ne: req.decoded.username } }, (err, result) => {
    if (err) return res.json(err);
    return res.json({ data: result });
  });*/