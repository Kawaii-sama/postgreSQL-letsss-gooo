import {InputType, Field} from '@nestjs/graphql';
import { IsNotEmpty, IsString} from 'class-validator';

@InputType()
export class CreateBookinput {
    @Field()
    @IsString()
    @IsNotEmpty()
    'title' : string;
}
