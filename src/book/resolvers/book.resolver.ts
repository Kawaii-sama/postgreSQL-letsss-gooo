import { Args, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query(() => [Book], { name: 'getAllBooks'})
    async findAll() {
        return this.bookService.findAll();
    }

    @Query( () => Book, {name: 'getBook'})
    async findOne(@Args('id' , { type : () => String}) id : string) {
        return this.bookService.findOne(id);
    }

}
