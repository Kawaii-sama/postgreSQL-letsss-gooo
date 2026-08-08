import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { UpdateBookInput } from '../dto/update-book.input';

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

    @Mutation( () => Book)
    async createBook(@Args ('input') input : UpdateBookInput) {
        return this.bookService.create(input);
    }

}
