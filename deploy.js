/* eslint-disable no-console */
const path = require('path');
const SftpClient = require('ssh2-sftp-client');

require('dotenv').config();

const config = {
  host: process.env.FTP_DEPLOY_HOST,
  username: process.env.FTP_DEPLOY_USERNAME,
  password: process.env.FTP_DEPLOY_PASSWORD,
  port: process.env.FTP_DEPLOY_PORT || 22,
};

const isDev = process.argv.indexOf('-d') > -1;
const theme = process.argv[process.argv.findIndex(arg => arg === '-t') + 1];

const directories = {
  theme: {
    local: `/${theme}`,
    remote: isDev ? `/var/www/${theme}.hasanirogers.me/public_html/wp-content/themes/${theme}` : `/var/www/${theme}.hasanirogers.me/public_html/wp-content/themes/${theme}`,
  },
  filter: /^(?!.*(.git|.github|node_modules))/gm
};

const upload = async () => {
  const client = new SftpClient();
  const themeSRC = path.join(__dirname, directories.theme.local);

  try {
    await client.connect(config);

    client.on('upload', (info) => {
      console.log(`Listener: Uploaded ${info.source}`);
    });

    const options = {
      filter: (path, isDirectory) => directories.filter.test(path)
    }

    await client.uploadDir(themeSRC, directories.theme.remote, options);

    return;
  } finally {
    client.end();
  }
};

upload()
  .then(message => console.log(message))
  .catch((error) => { console.log(`main error: ${error.message}`); });
