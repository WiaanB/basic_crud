export interface User {
    id: number,
    username: string,
    name: string,
    surname: string,
    age: number,
    employed: boolean,
    job: {
        title: string,
        company: string,
        period: number
    },
    hobbies: string[]
    [key: string]: any
}