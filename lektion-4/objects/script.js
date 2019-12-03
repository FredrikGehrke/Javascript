$(function() {

    let object = {};
    let objectArray = [];

    const person = {
        firstName: 'Hans', 
        lastName: 'Mattin-Lassei',
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        address: {
            street: 'Pilgatan 2',
            zipcode: 12345,
            city: 'Västerås',
            fullAddress: function() {
                return `${this.street}, ${this.zipcode} ${this.city}`
            }
        },
        phoneNumbers: [
            '073-123 12 12',
            '070-123 12 31'
        ],
        emailAddress: 'hans@domain.com',
        description: 'Här "är" världens bästa person'
    }

    document.write(person.address.fullAddress())

    // JSON - Konvertera från ett Javascript objekt till JSON
    let json = JSON.stringify(person);
    document.write(json);

    // JSON - Konvertera från ett JSON till Javascript objekt
    let javascriptObj = JSON.parse(json);
    document.write(javascriptObj.address.street)


});
