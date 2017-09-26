'use strict';

var request = require('request');
const token = 'YOUR_GITHUB_TOKEN';

function getBranch (owner, repo, branchName, callback) {
    var requestOption = {
        url: `https://api.github.com/repos/${owner}/${repo}/branches/${branchName}?access_token=${token}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Awesome-ichwan-App'
        },
        json: true
    };

    request(requestOption, callback);
}

getBranch('ichwanhs96', 'github-branch-commit-checker', 'master', function (err, branchInformation) {
    if (err) {
        throw err;
    }

    console.log(JSON.stringify(branchInformation, null, 4));
});