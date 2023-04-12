// const fs = require("fs").promises;
// const path = require("path");
// const { nanoid } = require("nanoid");

// const contactsPath = path.join(__dirname, "./contacts.json");

// const listContacts = async () => {
//     const response = await fs.readFile(contactsPath);
//     return JSON.parse(response);
// };

// const getById = async (id) => {
//     const contacts = await listContacts();

//     const contact = contacts.find((el) => el.id === id);
//     if (!contact) {
//         return null;
//     }

//     return contact;
// };

// const removeContact = async (id) => {
//     const contacts = await listContacts();

//     const index = contacts.findIndex((el) => el.id === id);
//     if (index === -1) {
//         return null;
//     }
//     const [result] = contacts.splice(index, 1);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, "\t"));
//     return result;
// };

// const addContact = async ({ name, email, phone }) => {
//     const contacts = await listContacts();

//     const newContact = { id: nanoid(), name, email, phone };
//     if (contacts.some((el) => el.name === name || el.phone === phone)) {
//         return console.log("You already have this contact.");
//     } else {
//         const updatedContactsList = JSON.stringify(
//             [...contacts, newContact],
//             null,
//             "\t"
//         );

//         await fs.writeFile(contactsPath, updatedContactsList);
//         return newContact;
//     }
// };

// const updateContact = async (id, body) => {
//     const contacts = await listContacts();

//     const index = contacts.findIndex((el) => el.id === id);
//     if (index === -1) {
//         return null;
//     }
//     contacts[index] = { id, ...body };
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, "\t"));

//     return contacts[index];
// };

// module.exports = {
//     listContacts,
//     getById,
//     removeContact,
//     addContact,
//     updateContact,
// };
