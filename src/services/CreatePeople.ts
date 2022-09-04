import { PeopleRepository } from "../repositories/PeoplesRepository";

interface CreatePeopleRequest{
    name: string;
    description?: string;
}

export class CreatePeople {
    constructor(
        private  peoplerepository: PeopleRepository,

        
    ) {}

    async exec({name,description}: CreatePeopleRequest){

        if (!name){
            throw new Error('Name is Required')
        }

        await this.peoplerepository.create({
            name,
            description
        })

    }
}