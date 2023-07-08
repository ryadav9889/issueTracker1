// ---------modals---------------//
const Creator = require('../modals/projectCreator');
const Issue = require('../modals/issue');


// ==========================adding new project-=========================//
module.exports.createProject = function(req,res){
    // console.log(req.body.name);

    var addProject = new Creator({
        name:req.body.name,
        Description:req.body.Description,
        Author:req.body.Author
    })
   addProject.save().then(function(added){
          console.log('project  was added:', added)
    });
    return res.redirect('back');
}

// ====================================================//


// ======================showing particular project page=========================//

module.exports.projects = async function(req,res){
    // console.log(req.params.id);

    try {
        let project = await Creator.findById(req.params.id);
        if (project) {
          return res.render('project_page', {
            title: 'Project Page',
            project,
          });
        }
        return res.redirect('back');
      } catch (err) {
        console.log(err);
        return res.redirect('back');
      }

    };
    // =====================================================//

  //  ==================controller to create issue============================///
    module.exports.createIssue = function(req,res){
      console.log(req.body.Title);

      var addIssue =  new Issue({
            title:req.body.Title,
            description:req.body.Description,
            labels:req.body.label,
            author:req.body.Author,
            id:req.body.id
      })

      addIssue.save().then(function(added){
        console.log('issue was added:', added)
  });
  return res.redirect('back');

    }
      //  =================================================//


// ========= contoller to show all issue =====================//
    module.exports.showAllIssue = async function(req,res){
      
         console.log(req.params.id);

         try {
          let project = await Issue.find({id:req.params.id});

          if (project) {
            console.log(project)
            return res.render('showIssue', {
              title: 'Show All Issue',
              project,
            });
          }
          return res.redirect('back');
         }
         catch(err){
          console.log(err);
        return res.redirect('back');
         }

    }
// //================================================///

    // getting issue========================================

    module.exports.getIssue = async function(req,res){

      console.log(req.body.title);

      try {
        let project = await Issue.find({title:req.body.title,description:req.body.Description});

        if (project) {
          console.log(project)
          return res.render('showIssue', {
            title: 'Show All Issue',
            project,
          });
        }
        return res.redirect('back');
       }
       catch(err){
        console.log(err);
      return res.redirect('back');
       }

  }
  // ===========================================================//

// ================================filter======================//
  module.exports.filter = async function(req,res){

    try {
      let project = await Issue.find({labels:req.body.label,author:req.body.author});

      if (project) {
        console.log(project)
        return res.render('showIssue', {
          title: 'Show All Issue',
          project,
        });
      }
      return res.redirect('back');
     }
     catch(err){
      console.log(err);
    return res.redirect('back');
     }
  }
  // =================================================================//