
module.exports = {
  "dryRun": false,
  "branches": [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    {
      "name": 'beta',
      "prerelease": true
    },
    {
      "name": 'alpha',
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        "assets": [
          "docs/CHANGELOG.md",
          "package.json",
          "package-lock.json"
        ],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
};