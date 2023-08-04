import companyPublishers from "../model/CompanyPublish.js";

class CompanyPublisherController {

  static getAllCompanyPublishers = (req, res) => {
    companyPublishers.find((err, companyPublishers) => {
      res.status(200).json(companyPublishers);
    });
  };
    
  static getCompanyPublisherById = (req, res) => {
    const id = req.params.id;
    companyPublishers.findById(id, (err, companypublishers) => {
      if(err){
        res.status(400).send({message: `${err.message} = Id not found! `});
      }else{
        res.status(200).send(companypublishers);
      }
    });
  };

  static deleteCompanyPublisher = (req, res) => {
    const id = req.params.id;
    companyPublishers.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send("Successfully delete auhtor");
      }else{
        res.status(500).send({message: `${err.message} = Id not found! `});
      }
    });
  };

  static createdCompanyPublisher = (req, res) => {
    let companyPublisher = new companyPublishers(req.body);
    console.log(companyPublisher);
    companyPublisher.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed create companyPublisher`
        });
      } else {
        res.status(200).json(companyPublisher.toJSON());
      }
    });
  };
    
  static updateCompanyPublisher = (req, res) => {
    const id = req.params.id;
    companyPublishers.findByIdAndUpdate(id, {$set: req.body},(err) =>{
      if(!err){
        res.status(200).send({message: "Successfully update auhtor"});
      }else{
        res.status(500).send({message: err.message});
      }
    });
  };
}

export default CompanyPublisherController;