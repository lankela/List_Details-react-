import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ContactsApi from'../utils/contactsApi';


export default {
	receiveContacts: () => {
		ContactsApi
		.getContacts('https://jsonplaceholder.typicode.com/users')
		.then(contacts => {
			AppDispatcher.dispatch({
				actionType: AppConstants.RECEIVE_CONTACTS,
				contacts: contacts
		});
	 })
	.catch(message => {
			AppDispatcher.dispatch({
				actionType: AppConstants.RECEIVE_CONTACTS_ERROR,
				message: message
		});
	 });
	},

	saveContact:(contact) => {
		ContactsApi
		.saveContact('https://jsonplaceholder.typicode.com/users', contact)
		.then(contact => {
			AppDispatcher.dispatch({
				actionType: AppConstants.RECEIVE_CONTACT,
				contact: contact
		});
	 })
	.catch(message => {
			AppDispatcher.dispatch({
				actionType: AppConstants.RECEIVE_CONTACT_ERROR,
				message: message
		});
	 });

	},
	deleteContact:(id) => {
		ContactsApi
		.deleteContact('https://jsonplaceholder.typicode.com/users/'+id)
		.then(contact => {
			AppDispatcher.dispatch({
		    actionType: AppConstants.DELETE_CONTACT,
		    id: id

		});
	 })
	.catch(message => {
			AppDispatcher.dispatch({
				actionType: AppConstants.DELETE_CONTACT_ERROR,
				message: message
		});
	 });

	}
}	