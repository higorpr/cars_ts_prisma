import prisma from "../config/database.js";
import db from "../config/database.js";
import { Car } from "../protocols/car.js";

async function getCars() {
	return await prisma.cars.findMany();
}

async function getCar(id: number) {
	const data = await prisma.cars.findUnique({ where: { id: id } });
	return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
	const data = await prisma.cars.findUnique({
		where: { licensePlate: licensePlate },
	});
	return data;
}

async function createCar(car: Car) {
	await prisma.cars.create({ data: car });
}

async function deleteCar(id: number) {
	await prisma.cars.delete({ where: { id: id } });
	
}

const carRepository = {
	getCar,
	getCarWithLicensePlate,
	getCars,
	createCar,
	deleteCar,
};

export default carRepository;
