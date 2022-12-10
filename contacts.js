// add a new contact to constant contact account

const ConstantContact = require('constantcontact');
const client = ConstantContact.ApiClient.instance;

// Set your API key
client.authentications['apiKey'].apiKey = 'YOUR_API_KEY';

// Create a new contact
const contact = new ConstantContact.Contact();
contact.first_name = 'John';
contact.last_name = 'Doe';
contact.email_addresses = [{
  email_address: 'johndoe@example.com'
}];

// Create a new contacts service
const contactsService = new ConstantContact.ContactsService(client);

// Add the contact to your Constant Contact account
contactsService.addContact(contact)
  .then((response) => {
    console.log('Contact added successfully:', response);
  })
  .catch((error) => {
    console.error('Error adding contact:', error);
  });
