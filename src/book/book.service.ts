import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './model/book.model';
import { Model } from 'mongoose';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BookService {
    constructor(@InjectModel (Book.name) private bookModel : Model<Book>) {}

    async create (input : CreateBookInput) : Promise<Book> {
        const created = new this.bookModel(input);
        return created.save();
    }

    async findAll() : Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findOne(id : string) : Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
    }
}
