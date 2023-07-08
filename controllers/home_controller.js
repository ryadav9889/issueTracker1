// importing project schema
const projectCreator = require('../modals/projectCreator')

// console.log(projectCreator);

// home controller
module.exports.home = async function(req,res){
    try {
        let projects = await projectCreator.find({}).sort('-createdAt');
        return res.render('home', {
          title: 'Issue Tracker | Home',
          projects,
        });
      } catch {
        console.log('Error', err);
        return;
      }
    };
    // /----------------------///
