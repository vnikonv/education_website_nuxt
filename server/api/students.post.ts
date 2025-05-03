import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=>  {
    let student = null
    const body = await readBody(event)

    if (body.id) {
        student = await prisma.students.create(
            {
                data: {
                    id: body.id,
                    name: body.name,
                    age: body.age,
                    course: body.course,
                    rating: body.rating,
                    scholarship: body.scholarship
                }
            }
        )
    }

    return {
        user: student
    }
})