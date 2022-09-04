import { people } from "@prisma/client";
import crypto from 'node:crypto'
import { CreatePeopleData, PeopleRepository } from "../../repositories/PeoplesRepository";


export class InMemoryPeopleRepository implements PeopleRepository{

    public items: people[] = [];

    async create(data: CreatePeopleData){
        this.items.push({
            id: crypto.randomUUID(),
            name: data.name,
            description: data.description ?? null
        })
    }
}