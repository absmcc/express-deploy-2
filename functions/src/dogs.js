export function getDogs(req, res) {
    res.send([
        {name: 'Ryder', age: 4, breed: 'Dumbass', gender: 'MN' },
        {name: 'Duke', age: 2, breed: 'Rotty', gender: 'M'},
        {name: "Indigo", age: 12, breed: "Great Dane/ Lab Mix", gender: "M" }
    ])
}

export function testApi(req, res) {
    res.send ({success: true, message: 'Api is working'});
}