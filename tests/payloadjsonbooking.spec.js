import {test, expect} from '@playwright/test';
import fs from 'fs';

test("payload json booking", async ({request}) => {


    const file=fs.readFileSync("./testdata/bookingdata.json");

    const bookingdata=JSON.parse(file);

    const response=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:bookingdata})

    const jsonresponse=await response.json();

    console.log(jsonresponse);

})