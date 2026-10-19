import {test, expect} from "@playwright/test"

test("get call", async ({request}) => {

    const resp=await request.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(resp)
    const respbody=await resp.body()
    console.log(respbody);
    const respjson=await resp.json()
    console.log(respjson);

})