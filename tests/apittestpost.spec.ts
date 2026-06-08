import { test, expect } from '@playwright/test';

test('create a new user', async ({ request }) => {
  const response = await request.post('https://dotesthere.com/api/users', {
    headers: {'Content-Type': 'application/json'},
    data: {
      "id": '1',
      "email": '123@gmail.com',
      "first_name": 'Tanu2',
      "last_name": 'Bhupathi',
      "avatar": 'https://dotesthere.com/img/faces/1-image.jpg'
          }
          
  }) 
 // Verify the response
// expect(response.ok()).toBeTruthy();
 const body = await response.json();
  console.log(body);
 })

    