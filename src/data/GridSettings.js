module.exports = {
    columns: [
        { field: "id", type: "number", normalizer: "uppercase", order: 0 },
        { field: "username", type: "string", order: 1 },
        { field: "employed", type: "boolean", order: 2 },
        { field: "hobbies", type: "array", order: 3 },
        { field: "job.title", title: "job", type: "string", hidden: false, order: 4 }
    ],
    identifying_field: "id"
}