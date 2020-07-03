// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
    'AMAZON.YesIntent': 'YesIntent',
    'AMAZON.NoIntent': 'NoIntent'
  },

  db: {
    FileDb: {
      pathToFile: '../db/db.json',
    },
  },
};

// TO MAP THE INTENTS SO BOTH ARE COMPATIBLE IN AMAZON AND DIALOGFLOW.
// module.exports = {
//   logging: true,

//   intentMap: {
//      'AMAZON.StopIntent': 'END',
//      'AMAZON.YesIntent': 'YesIntent',
//      'AMAZON.NoIntent': 'NoIntent'
//   },
// };
