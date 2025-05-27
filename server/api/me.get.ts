import {getServerSession} from '#auth'

export default eventHandler(async (event) => {
    const session = getServerSession(event)
    return session
})