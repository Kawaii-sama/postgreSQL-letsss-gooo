import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee) // tells what entity to be injeced in this service
    ) {}
}
