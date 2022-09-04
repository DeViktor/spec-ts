import express from "express"
import { PrismaPeopleRepository } from "./repositories/prisma/PrismaPeopleRepository";
import { CreatePeople } from "./services/CreatePeople";

export const app = express()

app.use(express.json())

app.post('/p', async (request, response)=>{

    const {name, description} = request.body;

    const prismaPeopleRepository = new PrismaPeopleRepository();
    const createPeople = new CreatePeople(prismaPeopleRepository);

    try {
        await createPeople.exec({name, description});

        return response.status(201).send();
    } catch (error: any) {
        return response.status(400).json({
            error: error.message,
        })
    }

})