// const Product = require("../model/booking");
var path = require("path");
const User = require("../model/booking");
// const { use } = require("../routes/booking");
exports.getuser = (req, res, next) => {
  // res.render("admin/edit-product", {
  //   pageTitle: "Add Product",
  //   path: "/admin/add-product",
  //   editing: false,
  // });

  res.sendFile(path.resolve("views/index.html"));
};

exports.adduser = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  console.log(name, phone, email);
  User.create({
    name: name,
    phone: phone,
    email: email,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getalluser = (req, res, next) => {
  let result;
  const users = User.findAll()

    .then((results) => res.json(results))
    .catch((err) => console.log(err));
};

exports.deleteuser = (req, res, next) => {
  const userid = req.params.userid;
  console.log(userid);
  User.findByPk(userid)
    .then((data) => {
      console.log(data);
      return data.destroy();
    })
    .then((result) => {
      console.log("DESTROYED User");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
