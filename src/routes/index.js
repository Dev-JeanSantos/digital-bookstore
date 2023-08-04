import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorRoutes from "./authorsRoutes.js";
import companyPublishersRoutes from "./companyPublishersRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send('Home Page - Book API')
    })

    app.use(
        express.json(),
        booksRoutes,
        authorRoutes,
        companyPublishersRoutes
    )
}

export default routes;