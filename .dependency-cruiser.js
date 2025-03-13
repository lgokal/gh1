// .dependency-cruiser.js
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'app-should-not-depend-on-mvw',
      severity: 'error',
      from: { path: 'apps/gh1/src' },
      to: { path: 'apps/mvwrapper/src' },
    }
    /*{
      name: 'internal-components-should-not-be-accessed',
      severity: 'error',
      from: {},
      to: { path: 'src/users/internal' }, // Example of an internal directory
    },*/
  ],
  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    tsConfig: {
      fileName: 'tsconfig.json',
    },
  },
};