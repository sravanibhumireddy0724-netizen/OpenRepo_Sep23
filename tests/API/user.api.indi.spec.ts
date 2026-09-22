
import { ApiHelper } from '../../src/api/APIHelper';
import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//helper - generic function - Create a fresh user

async function createUser(apiHelper:ApiHelper) {
   let userData = {
            name: 'Playwright API',
            email: `automation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
        };

        let response = await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
        expect(response.status).toBe(201);
        return response.body;
    
}


//Test 1: Create a user and verify:AAA
//POST->UserID->GET/USERID-Verify

test('POST and GET Verification',async({apiHelper})=>{
//create a user

let userResponse= await createUser(apiHelper);

//get the user

let response=await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);

expect(response.status).toBe(200);
expect(response.body.name).toBe('Playwright API');


})


//Test 2: Update  a user and verify:AAA
//POST->UserID->PUT->GET/UserID-Verify

test('PUT and GET Verification',async({apiHelper})=>{
//create a user

let userResponse= await createUser(apiHelper);

//get the user


let userUpdatedDada={
    name:'Playwright Test API',
    status:'inactive'
};

let response=await apiHelper.put(`/public/v2/users/${userResponse.id}`,userUpdatedDada,AUTH_HEADER);

expect(response.status).toBe(200);
expect(response.body.name).toBe(userUpdatedDada.name);
expect(response.body.status).toBe(userUpdatedDada.status);


})



//Test32: Delete  a user and verify:AAA
//POST->UserID->Delete->GET/UserID-Verify

test('Delete and GET Verification',async({apiHelper})=>{
//create a user

let userResponse= await createUser(apiHelper);

//get the user


let response=await apiHelper.delete(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);

expect(response.status).toBe(204);

//get the deleted user

let getResponse=await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);

expect(getResponse.status).toBe(404);


expect(getResponse.body.message).toBe(`Resource not found`)


})



