const express = require('express');
const router = express.Router();

// requiring user controller
const userController = require('../controllers/user_controller');

// route to create or add project
router.post('/create-project',userController.createProject);

// route to dispaly specfic project
router.get('/project/:id',userController.projects);

// route to create project
router.post('/create-issue',userController.createIssue);

// route to show all issue
router.get('/:id',userController.showAllIssue);
 
//route to get search issue
router.post('/getIssue',userController.getIssue);
//route to get filter issue
router.post('/filter',userController.filter);







module.exports = router;