module.exports = {
    "id": {
        "name": "id",
        "edit_type": "number",
        "editable": false,
        "rules": {
            "allow_negative": false,
            "increment": 1,
            "floating_point": false,
            "minimum_value": 1
        },
        "group": "None",
        "required": true,
        "default_value": 0
    },
    "username": {
        "name": "username",
        "edit_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": true,
        "default_value": "None"
    },
    "name": {
        "name": "name",
        "edit_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": false,
        "default_value": "None"
    },
    "surname": {
        "name": "surname",
        "edit_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": false,
        "default_value": "None"
    },
    "age": {
        "name": "age",
        "edit_type": "number",
        "editable": true,
        "rules": {
            "allow_negative": false,
            "increment": 1,
            "floating_point": false,
            "minimum_value": 18
        },
        "group": "None",
        "required": false,
        "default_value": 18
    },
    "employed": {
        "name": "employed",
        "edit_type": "boolean",
        "editable": true,
        "rules": {},
        "group": "None",
        "required": false,
        "default_value": false
    },
    "job.title": {
        "name": "job.title",
        "edit_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": false,
        "default_value": "None"
    },
    "job.company": {
        "name": "job.company",
        "edit_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": false,
        "default_value": "None"
    },
    "job.period": {
        "name": "job.period",
        "edit_type": "number",
        "editable": true,
        "rules": {
            "allow_negative": false,
            "increment": 1,
            "floating_point": false,
            "minimum_value": 0
        },
        "group": "None",
        "required": false,
        "default_value": 0
    },
    "hobbies": {
        "name": "hobbies",
        "edit_type": "array",
        "entry_type": "string",
        "editable": true,
        "rules": {
            "allow_empty": false,
            "regex": ""
        },
        "group": "None",
        "required": false
    }
}