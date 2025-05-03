import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=>  {
    const body = await readBody(event)
    let doctor = null

    if (body.id) {
        doctor = await prisma.students.update({
            where: {
                id: body.id
            },
            data: {
                id: body.id,
                name: body.name,
                age: body.age,
                course: body.course,
                rating: body.rating,
                scholarship: body.scholarship
            }
        })
    }
})