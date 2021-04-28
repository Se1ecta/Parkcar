module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  name: {
		type: Sequelize.STRING
	  },
      surname: {
		type: Sequelize.STRING
	  },
	});
	
	return Customer;
}