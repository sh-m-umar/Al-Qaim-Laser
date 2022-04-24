const glob = require('glob');
const path = require('path');

const BASE_PATH = path.resolve(`${__dirname}/../app/routes`);

/**
 * @typedef ControllerProps
 * @property {import('express')} app - Express app instance
 */

module.exports = ( {app} ) => {
  const controllers = glob.sync('**/*.routes.js', {
    cwd: BASE_PATH,
  });
  
  for ( let controllerFile of controllers ) {
    require(`${BASE_PATH}/${controllerFile}`)({app});
  }
};
