import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
impor

export class JwtStrategy extends PassportStrategy (Strategy) {}