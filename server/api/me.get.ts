export default eventHandler(async () => {
    const session = $fetch('/api/auth/session')
    return session
})