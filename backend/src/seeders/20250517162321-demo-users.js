'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@bookingcare.com',
      firstName: 'Admin',
      lastName: 'BookingCare',
      address: 'Ha Noi',
      gender: 1,
      phoneNumber: '0987654321',
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'doctor@bookingcare.com',
      firstName: 'Doctor',
      lastName: 'Test',
      address: 'Ho Chi Minh',
      gender: 1,
      phoneNumber: '0123456789',
      role: 'DOCTOR',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'patient@bookingcare.com',
      firstName: 'Patient',
      lastName: 'Test',
      address: 'Da Nang',
      gender: 0,
      phoneNumber: '0123498765',
      role: 'PATIENT',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
