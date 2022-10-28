import  User  from "../models/user.model.js";


/*export function Register(req,res){
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        wallet: req.body.wallet,
      });
      user
        .save()
        .then(() => {
          console.log("user registered");
          res.status(200).json({ msg: "User Successfully Registered" });
        })
        .catch((err) => {
          res.status(403).json({ msg: err });
        });
}

*/
export function Register(req,res){
  const user = new User({
      username: req.body.username,
      password: req.body.password,
      wallet: req.body.wallet,
      image : `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
    });
    user
      .save()
      .then(() => {
        console.log("user registered");
        res.status(200).json({ msg: "User Successfully Registered" });
      })
      .catch((err) => {
        res.status(403).json({ msg: err });
      });
}




export function update (req,res){
    User.findOneAndUpdate(
        { username: req.params.username },
        { $set: { password: req.body.password } },
        (err, result) => {
          if (err) return res.status(500).json({ msg: err });
          const msg = {
            msg: "password successfully updated",
            username: req.params.username,
          };
          return res.json(msg);
        }
      );
}

export function login(req,res){
    User.findOne({ username: req.body.username }, (err, result) => {
        if (err) return res.status(500).json({ msg: err });
        if (result === null) {
          return res.status(403).json("Username incorrect");
        }
        if (result.password === req.body.password) {
    
          res.json({
           
            msg: "success",
          });
        } else {
          res.status(403).json("password is incorrect");
        }
      });
}