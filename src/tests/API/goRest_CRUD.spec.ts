import {test,expect} from '@playwright/test'




let AUTH_TOKEN ={Authorization:'Bearer d1ef45bd2f20a3d07cdb367dc5c728491f0e80fb9af55dc7c5f02d329bbd5335'};

test('Get the users',async({request})=>{

let response=await request.get('https://gorest.co.in/public/v2/users',
    {
        headers:AUTH_TOKEN
    });

    let jsonBody=await response.json();

    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());
    expect(response.status()).toBe(200);
})

test('POST-Create User',async({request})=>{

//JS Object

let userData={
    name:'',
    email:"",
    gender:'female',
    status:'active'
}
let response = await request.post('https://gorest.co.in/public/v2/users',
    {
        headers:AUTH_TOKEN,
        data:userData
    });

    let jsonBody=await response.json();

    console.log(jsonBody);

    console.log(response.status());

    console.log(response.statusText());

    expect(response.status()).toBe(201);

    let enduser=JSON.parse(jsonBody);
    console.log(enduser);

})



test('PUT-Update User',async({request})=>{

//JS Object

let userData={
    name:'Uday',
    email:`automation_${Date.now()}@open.com`,
    gender:'Male',
    status:'active'
}
let response = await request.put('https://gorest.co.in/public/v2/users/8588820',
    {
        headers:AUTH_TOKEN,
        data:userData
    });

    let jsonBody=await response.json();

    console.log(jsonBody);

    console.log(response.status());

    console.log(response.statusText());

    expect(response.status()).toBe(200);


})



test('Get the single user',async({request})=>{

let response=await request.get('https://gorest.co.in/public/v2/users/8584029',
    {
        headers:AUTH_TOKEN
    });

    let jsonBody=await response.json();

    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());
    expect(response.status()).toBe(200);
})


test('Delete the user',async({request})=>{

let response=await request.delete('https://gorest.co.in/public/v2/users/8584029',
    {
        headers:AUTH_TOKEN
    });

   // let jsonBody=await response.json();

    //console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());
    expect(response.status()).toBe(204);
})

test('Verifying deletd user',async({request})=>{

let response=await request.get('https://gorest.co.in/public/v2/users/8584029',
    {
        headers:AUTH_TOKEN
    });

    let jsonBody=await response.json();

    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());
    expect(response.status()).toBe(404);
})