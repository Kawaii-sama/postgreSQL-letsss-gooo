import {InputType, Field} from '@nestjs/graphql';
import { IsNotEmpty, IsString} from 'class-validator';

@InputType()
export class CreateBookInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    'title' : string;
}
