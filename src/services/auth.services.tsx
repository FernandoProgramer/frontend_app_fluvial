
export function fakeLogin(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email !== 'user@gmail.com' || password !== 'password123') {
                return reject({ error: "Incorrect credentials", statusCode: 401 });
            }
            return resolve({ email, password });
        }, 2000);
    })
}