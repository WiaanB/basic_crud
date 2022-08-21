export const flattenObject = (object, parent) => {
    // new object to be returned
    let flatObject = {}
    // go over each of the fields in the object
    Object.keys(object).forEach(key => {
        // check if the field is an object that needs further flattening
        if (object[key].constructor === Object) {
            // create a temp flattened field and add all its field to the new object
            let flattenField = flattenObject(object[key], key)
            Object.keys(flattenField).forEach(field => {
                // ensure to handle the parent field names accordingly
                flatObject[parent ? `${parent}.${field}` : field] = flattenField[field]
            })
        }
        // check if there is a parent object, if so, add that to the key
        else parent ? flatObject[`${parent}.${key}`] = object[key] : flatObject[key] = object[key]
    })
    return flatObject;
}
