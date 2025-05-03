import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) =>  {
    const query = getQuery(event);
    const name = query.name as string | undefined;

    const getus = (name != undefined) ? await prisma.students.findMany({
        where: {
            name: {
                contains: name,
            },
        },
        orderBy:
            {
             id: 'asc',
        },
    })
        : await prisma.students.findMany({
            orderBy:
                {
                  id: 'asc',
                },
    });

    console.log("Found students: ", getus, name)
    return {
        getus
    }
})