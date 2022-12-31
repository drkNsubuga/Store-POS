module.exports = {
  packagerConfig: {
    icon:'assets/icons/win/icon.ico',
    setupIcon: 'assets/icons/win/icon.ico'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip'
    }
  ],
    "publishers": [
        {
          "name": "@electron-forge/publisher-github",
          "config": {
            "repository": {
              "owner": "drkNsubuga",
              "name": "Store-POS",
              "draft": true
            }
          }
        }
      ]
};
