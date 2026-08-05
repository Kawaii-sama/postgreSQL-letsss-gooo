import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee) // tells what entity to be injeced in this service
        private employeeRepository: Repository <Employee> //Repository tells on what entity crud rules are to applied
    ) {}

    async create(employeeData: Partial<Employee>) : Promise<Employee>{
        const employee = this.employeeRepository.create(employeeData); //.create is the c of crud
        return this.employeeRepository.save(employee);
    }

    async findAll(): Promise<Employee[]> {
        return this.employeeRepository.find(); //find is the r of crud
    }

    async findOne(id : number) : Promise<Employee> {
        const employee = await this.employeeRepository.findOneBy({id});
        if(!employee) {
            throw new NotFoundException (`Employee with ID ${id} not found`);
        }
        return employee;
    }

    async update(id : number, updatedData: Partial<Employee>) : Promise<Employee> {
        const employee = await this.findOne(id);
        if(!employee) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }

        const updated = Object.assign(employee, updatedData);
        return this.employeeRepository.save(updated);

    }

    async delete(id : number) : Promise< { message : string}> {
        const result = await this.employeeRepository.delete(id);
        if(result.affected === 0) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }
        return { message : `Employee with ID ${id} deleted successfully`};
    }

    async search (filters : { name ?: string, department ?: string}) : Promise<Employee[]> {
        const query = this.employeeRepository.createQueryBuilder('employee');

        if(filters.name) {
            query.andWhere('employee.name ILIKE :name' , { name : `%{filters.name}%`})
        }


        if (filters.department) {
            query.andWhere('employee.department = :dept', { dept : `{filters.department}`});
        }

        return query.getMany();
    }
}
