var User = {
	attributes: {
		name: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true
		},
		passw: {
			type: 'string',
			required: true
		},
		enabled: {
			type: 'boolean',
			defaultsTo: 0
		},
		confirmation_date:{
			type: 'datetime'			
		}
	}
};

module.exports = User;