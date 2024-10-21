import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import e from 'express';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`, 'custom code');
    }
    return coffee;
  }

  create(createCoffeeDto: any, all: boolean = false) {
    const id = this.coffees.length + 1;
    const newCoffee = { id, ...createCoffeeDto };
    this.coffees.push(newCoffee);
    return all ? this.coffees : newCoffee;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
      existingCoffee.name = updateCoffeeDto.name ?? existingCoffee.name;
      existingCoffee.brand = updateCoffeeDto.brand ?? existingCoffee.brand;
      existingCoffee.flavors =
        updateCoffeeDto.flavors ?? existingCoffee.flavors;
      return existingCoffee;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }

  // other methods...
}
