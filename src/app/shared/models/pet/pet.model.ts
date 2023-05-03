export interface PetModel
{
    id: number | string
    name: string;
    type: string;
    age: number;
    birthDate: Date | undefined | null;
    pictureUrl : string;
}