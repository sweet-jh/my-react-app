const faker = require('faker');
const dateFormat = require('dateformat');

function generateProperties() {
    let properties = [];

    for (let id = 0; id < 5; id++) {
        let name = faker.name.findName();

        properties.push({
            "id": id,
            "street": [faker.random.number(256), faker.address.streetName(), 'Street'].join(' '),
            "address": faker.address.city(),
            "type": "House",
            "numBedroom": faker.random.number(5),
            "numBathroom": faker.random.number(5),
            "numCar": faker.random.number(5),
            "propertyID": faker.random.uuid().slice(0, 6).toUpperCase(),
            "price": faker.random.number(90) * 10,
            "bond": faker.random.number(90) * 100,
            "available": dateFormat(new Date(faker.date.future()), 'mmm dS, yyyy'), // 'mmmm dS, yyyy'
            "applications": {
                "count": faker.random.number(5),
                "link": "###",
                "shortlisted": faker.random.number(5),
                "total": faker.random.number(10)
            }
        })
    }

    return {"properties": properties}
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProperties
