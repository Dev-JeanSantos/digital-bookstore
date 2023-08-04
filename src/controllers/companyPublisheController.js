import {
  json
} from "express";
import companyPublishers from "../model/CompanyPublish.js";

class CompanyPublisherController {

  static getAllCompanyPublishers = async (req, res) => {
    try {
      const companyPublishersResult = await companyPublishers.find();
      res.status(200).json(companyPublishersResult);
    } catch (error) {
      res.status(500);
      json({
        message: "Erro no servidor"
      });
    }
  };

  static getCompanyPublisherById = async (req, res) => {
    try {
      const id = req.params.id;
      const companyPublishersResult = await companyPublishers.findById(id);
      res.status(200).send(companyPublishersResult);
    } catch (error) {
      res.status(400).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static deleteCompanyPublisher = async (req, res) => {
    try {
      const id = req.params.id;
      await companyPublishers.findByIdAndDelete(id);
      res.status(200).send("Successfully delete Company Publisher");
    } catch (error) {
      res.status(500).send({
        message: `${error.message} = Id not found! `
      });
    }
  };

  static createdCompanyPublisher = async (req, res) => {
    try {
      let companyPublisher = new companyPublishers(req.body);
      const companyPublisResult = await companyPublisher.save();
      res.status(200).json(companyPublisResult.toJSON());
    } catch (error) {
      res.status(500).send({
        message: `${error.message} - failed create companyPublisher`
      });
    }
  };

  static updateCompanyPublisher = async (req, res) => {
    try {
      const id = req.params.id;
      await companyPublishers.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Successfully update Company Publisher" });
    } catch (error) {
      res.status(500).send({message: error.message });
    }
  };
}

export default CompanyPublisherController;