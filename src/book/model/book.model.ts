import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Types } from 'mongoose';

@Schema()
@ObjectType()

export class Book extends Document {
    @Field(() => ID)
    //declare readonly _id : Types.ObjectId;
    declare readonly _id : string;

    @Prop({required : true})
    @Field()
    'title': string;

    @Prop()
    @Field({nullable : true})
    'description' ?: string;


}