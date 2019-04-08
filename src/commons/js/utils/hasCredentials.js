
export const hasCredentials = () => {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");

    return !!(token && userId);
}