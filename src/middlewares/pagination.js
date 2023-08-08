import IncorrectRequest from "../errors/IncorrectRequest.js";

async function pagination(req, res, next) {
  try {
    let {
      limit = 5, page = 1, sortingField = "_id", order = -1
    } = req.query;

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      const paginationResult = await result.find()
        .sort({
          [sortingField]: order
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("author")
        .populate("companyPublish")
        .exec();
      res.status(200).json(paginationResult);
    } else {
      next(new IncorrectRequest());
    }
  } catch (error) {
    next(error);
  }
}

export default pagination;