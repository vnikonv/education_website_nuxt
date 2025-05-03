import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const deleteID = body.id

    const del = await prisma.students.delete({
        where: {
            id: deleteID
        }
    })
    console.log(del)
})

