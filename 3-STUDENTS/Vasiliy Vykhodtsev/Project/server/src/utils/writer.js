const fs = require('fs');


module.exports = async (fileURL, data) => {
    try {
        await fs.writeFile(fileURL, JSON.stringify(data, null, ' '), err => { console.log('err') });
        return true;
    }
    catch(err) {
        return false;
    }
};
/*
writer('/basket.json', {}).then(res => {
    if(res) {

    }
})

let res = await writer('/basket.json', {});
if (res) {

}
*/