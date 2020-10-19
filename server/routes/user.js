import bcrypt from "bcrypt";
import Router from "express";
import Database from "../db";

const router = Router();

// router.post("/", tokenMiddleWare, checkUser, createUser);
router.post("/", createUser);

async function createUser(req, res) {
  console.log("createUser", { req, res });
  let { email, password, extraData } = req.body;
  if (!email || !password) {
    return res.status(409).send("One of the fields are empty");
  }
  if (password.length < 4) {
    return res.status(409).send("Password is too short");
  }
  email = String(email).toLowerCase();
  const emailPattern = /^[a-z0-9.-_]+@[a-z]+\.[a-z]{3}$/;
  const isValid = emailPattern.test(email);
  if (!isValid) return res.status(409).send("Email is not in a valid format");
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds).then(hash => hash);

  const user = {
    email,
    password: hash,
    ...extraData
  };

  const doc = Database.write({ tableName: "User", object: user });
  res.status(201).send(doc);
}

export default router;
