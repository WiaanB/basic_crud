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

export const rebuildObject = (object) => {
     // new object to be returned
    let rebuiltObject = {}
    // go over each of the fields in the object
    Object.keys(object).forEach(key => {
        // check if it is indeed a flattened object or not
        if (key.includes('.')) {
            // splitKey is to find the original object's name
            let splitKey = key.split('.')
            // rejoinedKey is for the remainder of the field name
            let rejoinedKey = splitKey.slice(1).join('.')
            // if it needs to be built up further, i.e another nested object, continue the loop
            if (rejoinedKey.includes('.')) {
                // spread out the object so that the existing fields remain, as well as adding the new rebuilt object (of which there might already be existing fields as well)
                rebuiltObject[splitKey[0]] = { ...rebuiltObject[splitKey[0]], ...rebuildObject({ ...rebuiltObject[splitKey[0]], [rejoinedKey]: object[key] }) }
            }
            // spread out the object so that the existing fields remai
            else rebuiltObject[splitKey[0]] = { ...rebuiltObject[splitKey[0]], [rejoinedKey]: object[key] }
        }
        else rebuiltObject[key] = object[key]
    })
    return rebuiltObject
}