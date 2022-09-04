import  request  from "supertest"
import { app } from "./app"

test('', async () => {
    const response = await request(app)
    .post('/p')
    .send({name:'ricardo5'})

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
} )