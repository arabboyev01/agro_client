export const handleRouter = (route: any) => {
    window.localStorage.removeItem('accessToken')
    route('/')
}