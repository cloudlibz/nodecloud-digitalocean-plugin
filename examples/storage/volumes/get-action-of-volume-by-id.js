const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const volumes = ncProviders.digitalocean.volumes();

volumes
  .getAction("02bc8179-8dee-11e9-a594-0a58ac144205", "aid")
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
