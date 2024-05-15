const model = require("../models/book-model.js");

function giveXId(id) {
  if (!id) {
    return "Send id";
  }
  return model.getById(id);
}

function giveXName(name) {
  if (!name) {
    return "Send name";
  }
  return model.getByName(name);
}

function giveXAuthor(author) {
  if (!author) {
    return "Send author";
  }
  return model.getByAuthor(author);
}

function giveAll(action) {
  //{ action: "read" } FALTA ALGO EN EL BODY PARA Q FUNCIONE?
  if (!action) {
    return "Send action";
  }
  return model.getAll(action);
}

function giveDelete(id) {
  //funciona pero tira error desp
  if (!id) {
    return "Send id to delete";
  }
  return model.deleteById(id);
}

function giveModify(body) { //{ action: "modify", body: { id: "1", name: "nuevo" } }
if ( !body ) {
         return "Send changes";
     }
     return model.modifyBook(body)
 }
module.exports = {
  giveXId: giveXId,
  giveXName: giveXName,
  giveXAuthor: giveXAuthor,
  giveAll: giveAll,
  giveDelete: giveDelete,
  giveModify: giveModify,
};
