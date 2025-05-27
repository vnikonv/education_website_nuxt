export default eventHandler(async () => {
    const session = await $fetch('/api/auth/session')
    return session
})