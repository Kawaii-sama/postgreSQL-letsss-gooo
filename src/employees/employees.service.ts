import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee) // tells what entity to be injeced in this service
        private employeeRepository: Repository <Employee> //Repository tells on what entity crud rules are to applied
    ) {}
}
