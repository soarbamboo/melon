const { execSync } = require('child_process');
const version = execSync('git rev-parse --verify HEAD', { encoding: 'utf8' })
  .toString()
  .trim();
console.log('next config env', version);
