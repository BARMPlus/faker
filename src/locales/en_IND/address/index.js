var address = {};
module['exports'] = address;
address.postcode = require('./postcode');
address.state = require('./state');
address.state_abbr = require('./state_abbr');
address.city_name = require('./city_name');
address.city = require('./city');
address.default_country = require('./default_country');
