// import { program } from "commander";
const {program} = require("commander")
const {listContacts, getContactById, addContact, removeContact} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();


// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await listContacts();
      return console.log(list);

    case "get":
      const item = await getContactById(id);
      return console.log(item);

    case "add":
      const newItem = await addContact(name, email, phone);
      return console.log(newItem);

    case "remove":
      const removedItem = await removeContact(id);
      return console.log(removedItem);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);