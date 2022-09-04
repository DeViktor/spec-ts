import { InMemoryPeopleRepository } from "../test/repositories/InMemoryPeopleRepository";
import { CreatePeople } from "./CreatePeople"

describe('CreatePeople Service', () => {

    it('should be able to create a new people', async () => {
    
        const InMemoryRepository = new InMemoryPeopleRepository();
    
        const createPeople = new CreatePeople(InMemoryRepository);
    
    //    const createPeople = new CreatePeople({
    //        create: async (data) =>{}
    //    });
    
        await expect(createPeople.exec({name: 'JOSE'}))
        .resolves
        .not
        .toThrow()
    
        expect(InMemoryRepository.items).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: 'JOSE'
                })
            ])
        )
    })

    it('should NOT be able to create a ne people with invalid name', async () => {
    
        const InMemoryRepository = new InMemoryPeopleRepository();
    
        const createPeople = new CreatePeople(InMemoryRepository);
    
    //    const createPeople = new CreatePeople({
    //        create: async (data) =>{}
    //    });
    
        await expect(createPeople.exec({name: ''}))
        .rejects
        .toThrow()
    
        expect(InMemoryRepository.items).toEqual([])
    })

})