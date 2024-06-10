
import { CarTypeModel } from '../models/car';
import { BikeTypeModel } from '../models/bike';
import { userModel } from '../models/user';

const seedData = async () => {
  const carTypesExist = await CarTypeModel.exists({});
  
  if (!carTypesExist) {
    const hatchback = new CarTypeModel({
      name: 'Hatchback',
      vehicles: [
        { name: 'Toyota Yaris' },
        { name: 'Honda Fit' },
        { name: 'Ford Fiesta' },
      ],
    });

    const suv = new CarTypeModel({
      name: 'SUV',
      vehicles: [
        { name: 'Jeep Grand Cherokee' },
        { name: 'Toyota RAV4' },
        { name: 'Honda CR-V' },
      ],
    });

    const sedan = new CarTypeModel({
      name: 'Sedan',
      vehicles: [
        { name: 'Honda Accord' },
        { name: 'Toyota Camry' },
        { name: 'Ford Fusion' },
      ],
    });

    await CarTypeModel.insertMany([hatchback, suv, sedan]);
  }

  const bikeTypesExist = await BikeTypeModel.exists({});

  if (!bikeTypesExist) {
    const cruiser = new BikeTypeModel({
      name: 'Cruiser',
      vehicles: [
        { name: 'Harley-Davidson Street Glide' },
        { name: 'Honda Rebel 500' },
        { name: 'Yamaha Bolt' },
      ],
    });

    await BikeTypeModel.insertMany([cruiser]);
  }

  const usersExist = await userModel.exists({});
  if (!usersExist) {
    const user = new userModel({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      bookings: [],
    });

    await user.save();
  }

  console.log('Seeding completed');
};

export default seedData;
