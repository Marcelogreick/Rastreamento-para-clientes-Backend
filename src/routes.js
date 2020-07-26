const express = require("express");

const ProjectController = require("./controllers/ProjectController");
const RegisterController = require("./controllers/RegisterController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");
const StepsController = require("./controllers/StepsController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);
routes.post("/login", LoginController.create);

routes.post("/user", UserController.create);
// routes.get("/user", UserController.listar);

routes.get("/projects", ProjectController.listar);
routes.post("/projects", ProjectController.create);

routes.get("/profile", ProfileController.listar);

routes.get("/records", RegisterController.listar);
routes.post("/records", RegisterController.create);
routes.delete("/records/:id", RegisterController.delete);

routes.post("/steps", StepsController.create);
routes.get("/steps", StepsController.listar);

module.exports = routes;
