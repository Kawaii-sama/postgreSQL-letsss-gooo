import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export class JwtStrategy extends PassportStrategy (Strategy) {
    constructor ( configService: ConfigService) {
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : configService.get<string> ('MY_JWT_SECRET')
        });
    }
}