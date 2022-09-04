export interface CreatePeopleData{
    name: string;
    description?: string;
}

export interface PeopleRepository {
    create(data: CreatePeopleData): Promise<void>
}