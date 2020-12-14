const fs = require('fs')
const appPkg = require('../package.json')
const functionsPkg = require('./package.json')
fs.writeFileSync(
  'package.json',
  JSON.stringify(
    {
      ...functionsPkg,
      dependencies: { ...functionsPkg.dependencies, ...appPkg.dependencies },
    },
    null,
    2
  )
)
