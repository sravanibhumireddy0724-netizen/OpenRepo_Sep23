import Ajv from "ajv";
import { test, expect } from '../../src/fixtures/apifixtures';


const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };


let ajv=new Ajv();

let userSchema={
    "type":"object",
    "properties":{
        "id":{
            "type":"number"
        },
        "name":{
            "type":"string"
        },
        "email":{
            "type":"string"
        },
          "gender":{
            "type":"string"
        },
         "status":{
            "type":"string"
        }
    },
    "required":[
        "id",
        "name",
        "email",
        "gender",
        "status"
        
    ]
    }


    let userArraysSchema={
        "type":"array",
        "items":userSchema
    }

test(`@smoke GET - get a user`,async ({apiHelper})=>{

   let userData = {
            name: 'Schema Test',
            email: `automation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
        };

        //POST

        let createResponse=await apiHelper.post('/public/v2/users',userData,AUTH_HEADER)
        let userId=createResponse.body.id;

        //get a user

        let getUserResponse= await apiHelper.get(`/public/v2/users/${userId}`,AUTH_HEADER);
        expect(getUserResponse.status).toBe(200);

        //schema validation code:
        let validate=ajv.compile(userSchema);

        let isSchemaValid= validate(getUserResponse.body)
if(!isSchemaValid){
    console.log("Scema errors :", validate.errors);
}

expect(isSchemaValid).toBeTruthy();

})



test(`@smoke GET - get all user`,async ({apiHelper})=>{

          //get aii user

        let getUserResponse= await apiHelper.get(`/public/v2/users`,AUTH_HEADER);
        expect(getUserResponse.status).toBe(200);

        //schema validation code:
        let validate=ajv.compile(userArraysSchema);

        let isSchemaValid= validate(getUserResponse.body)
if(!isSchemaValid){
    console.log("Scema errors :", validate.errors);
}

expect(isSchemaValid).toBeTruthy();

})







