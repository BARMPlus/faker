var address = {};
module['exports'] = address;
address.postcode = require('./postcode');
address.state = require('./state');
address.state_abbr = require('./state_abbr');
address.city_prefix = require('./city_prefix');
address.city_suffix = require('./city_suffix');
address.city = require('./city');
address.country = require('./country');
address.street_name = require('./street_name');
