import {test, expect} from '@playwright/test';

test("post call", async ({request}) => {

const authdata = {
    "username" : "admin",
    "password" : "password123"
}

const response = await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata})
console.log(response.status());
console.log(await response.json());
})
