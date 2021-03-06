import express from "express"

import { celebrate } from "celebrate"

import multer from "multer"
import multerconfig from "./config/multer"

import PointsController from "./controllers/pointsController"
import ItemsController from "./controllers/itemsController"
import Joi from "@hapi/joi"

const routes = express.Router()

const upload = multer(multerconfig)

const pointsController = new PointsController
const itemsController = new ItemsController

routes.get("/items", itemsController.index)

routes.get("/points/", pointsController.index)
routes.get("/points/:id", pointsController.show)

routes.post(
    "/points",
    upload.single("image"),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required(),
            items: Joi.string().required(),
        }), 
    },
    {
        abortEarly: false
    }
    ),
    pointsController.create
)

export default routes
