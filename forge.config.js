module.exports = {
  packagerConfig: {
    icon:'assets/icons/win/icon.ico',
    setupIcon: 'assets/icons/win/icon.ico'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip'
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
    "publishers": [
        {
          "name": "@electron-forge/publisher-github",
          "config": {
            "repository": {
              "owner": "drkNsubuga",
              "name": "electron-pos",
              "draft": true
            }
          }
        }
      ]
};
