import express from "express";
import companyPublishersController from "../controllers/companyPublisheController.js";

const router = express.Router();

router
    .get("/companyPublishers", companyPublishersController.getAllCompanyPublishers)
    .get("/companyPublishers/:id", companyPublishersController.getCompanyPublisherById)
    .post("/companyPublishers", companyPublishersController.createdCompanyPublisher)
    .put("/companyPublishers/:id", companyPublishersController.updateCompanyPublisher)
    .delete("/companyPublishers/:id", companyPublishersController.deleteCompanyPublisher)

export default router;