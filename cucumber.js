module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/steps/**/*.ts',
              'tests/commons/**/*.ts'
    ], 
       
    paths: ['tests/features/**/*.feature'], 
    
format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
 
    dryRun: false
  }
};
