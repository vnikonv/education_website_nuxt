import {NuxtAuthHandler} from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({

    pages: {
        signIn: '/login',
    },
    providers: [
        GithubProvider.default({
            clientId: runtimeConfig.public.GITHUB_ID,
            clientSecret: runtimeConfig.GITHUB_SECRET
        }),
    ],
})