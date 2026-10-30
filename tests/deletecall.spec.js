import {test, expect} from '@playwright/test';
test("delete call", async ({request}) => {

        const authdata = {
            "username": "admin",
            "password": "password123"
        }
    const response=await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata})
        const jsonresponse=await response.json();
        const token=jsonresponse.token;
        console.log("token is " +token);



        const bookingdata = {
    "firstname" : "Ankita",
    "lastname" : "Singh",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Dinner"
}
      const bookingresponse=  await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:bookingdata})
    const bookingjsonresponse=await bookingresponse.json();
    const bookingid=bookingjsonresponse.bookingid;
    console.log(bookingjsonresponse);
    console.log("booking id is " +bookingid);


const deleteResponse = await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingid,{headers:{"Content-Type":"application/json","Cookie":"token="+token}})
console.log("delete response status is " +deleteResponse.status());
console.log("delete response status text is " +deleteResponse.statusText());


})