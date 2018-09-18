function sortAddress(json) {
    if (!json) return;

    let sortObj = {};

    for (const key in json) {
        resolveExp(json, sortObj, key);
    }

    return sortObj;
}

function resolveExp(json, sortObj, id) {
    if (!json || !id) return;

    if (json[id][1] == 0) return sortObj[json[id][0]] ? sortObj[json[id][0]] : (sortObj[json[id][0]] = {});

    const parent = resolveExp(json, sortObj, json[id][1]);

    return parent[json[id][0]] ? parent[json[id][0]] : (parent[json[id][0]] = {});
}

function run() {
    const fs = require('fs');
    fs.readFile('../../mock/address.json', 'utf8', (err, data) => {
        if (err) throw err;
        const result = sortAddress(JSON.parse(data));

        fs.writeFileSync('../../mock/addressResult.json', JSON.stringify(result, null, 4));
    });
}

if (typeof window === 'undefined') {
    run();
}
