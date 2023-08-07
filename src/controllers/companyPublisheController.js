import companyPublishers from "../model/CompanyPublish.js";

class CompanyPublisherController {

  static getAllCompanyPublishers = async (req, res, next) => {
    try {
      const companyPublishersResult = await companyPublishers.find();
      res.status(200).json(companyPublishersResult);
    } catch (error) {
      next(error);
    }
  };

  static getCompanyPublisherById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const companyPublishersResult = await companyPublishers.findById(id);
      res.status(200).send(companyPublishersResult);
    } catch (error) {
      next(error);
    }
  };

  static deleteCompanyPublisher = async (req, res, next) => {
    try {
      const id = req.params.id;
      await companyPublishers.findByIdAndDelete(id);
      res.status(200).send("Successfully delete Company Publisher");
    } catch (error) {
      next(error);
    }
  };

  static createdCompanyPublisher = async (req, res, next) => {
    try {
      let companyPublisher = new companyPublishers(req.body);
      const companyPublisResult = await companyPublisher.save();
      res.status(200).json(companyPublisResult.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static updateCompanyPublisher = async (req, res, next) => {
    try {
      const id = req.params.id;
      await companyPublishers.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.status(200).send({
        message: "Successfully update Company Publisher"
      });
    } catch (error) {
      next(error);
    }
  };
}

export default CompanyPublisherController;