import {test, expect} from "@playwright/test"

test("get call", async ({request}) => {

    const resp=await request.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(resp)
    const respbody=await resp.body()
    console.log(respbody);
    const respjson=await resp.json()
    console.log(respjson);
    const respheaders=await resp.headers()
    console.log(respheaders);
    const respheadersArray= resp.headersArray()
    console.log(respheadersArray);

    const respstatus=await resp.status()
    console.log(respstatus);
    const respstatusText=await resp.statusText()
    console.log(respstatusText);
    expect(respstatus).toBe(200)
    expect(respstatusText).toBe("OK")
    expect(resp.ok()).toBeTruthy()
    expect(respjson).toHaveProperty("userId",1)
    expect(respjson).toHaveProperty("id",1)
    expect(respjson).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect(respjson.body).toContain("quia et suscipit")
})