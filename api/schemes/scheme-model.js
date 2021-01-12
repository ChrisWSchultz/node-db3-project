// scheme-model
let db = require('../../data/db-config')

function find() {
    return Promise.resolve(db.table("schemes"))
}

function findById(id) {
    let result = db.table("schemes")
        .where("id", id)
        .first()

    if(!result) {
        return Promise.resolve(null)
    } else {
        return Promise.resolve(result)
    }
}

function findSteps(id) {
    return db.table("steps")
        .where("scheme_id", id)
}

function add(scheme) {
    return Promise.resolve(
        db.table("schemes")
            .insert(scheme, "id")
            .then(([id]) => find(id))
    )
}

function update(changes, id) {
    return Promise.resolve(
        db.table("schemes")
            .where("id", id)
            .update(changes, "id")
            .then(([id]) => find(id))
    )
}

function remove(id) {
    return db.table("schemes")
        .where("id", id)
        .delete(id)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
