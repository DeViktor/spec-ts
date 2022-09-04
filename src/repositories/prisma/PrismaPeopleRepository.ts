import { prisma } from "../../prisma";
import { CreatePeopleData,PeopleRepository } from "../PeoplesRepository";

export class PrismaPeopleRepository implements PeopleRepository{
    async create(data: CreatePeopleData){
        await prisma.people.create({
            data
        })
    }
}