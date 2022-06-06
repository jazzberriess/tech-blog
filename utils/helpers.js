const Handlebars = require('handlebars');

// helper to format the date on datestamps
module.exports = {
  format_date: (date) => {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-GB', dateOptions);
  },
};

//helper block functtion to generate edit buttons if the comment user ID matches the logged in user ID
// https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional

Handlebars.registerHelper('verifyUserId', function (a, b, options) {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});
