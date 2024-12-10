import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/generated/client-flight';

@Injectable()
export class DatabaseFlightService extends PrismaClient {}
