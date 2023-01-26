export type CarEntity = {
	id: number;
	model: string;
	licensePlate: string;
	year: string;
	color: string;
};

export type Car = Omit<CarEntity, "id">;

export type CarUpdate = Partial<CarEntity>;
