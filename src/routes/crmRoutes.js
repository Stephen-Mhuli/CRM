import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "../controllers/crmContoller";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next)=>{
      // a middleware that handles all the requests
      console.log("Request from: " + req.originalUrl);
      console.log("Request type: " + req.method);
      next();
    },getContacts)

    // Post a new contact(endpoint)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // Get a specific contact(endpoint)
    .get(getContactWithID)
    // Update a specific contact(endpoint)
    .put(updateContact)
    // Delete a specific contact(endpoint)
    .delete(deleteContact); 
};

export default routes;
