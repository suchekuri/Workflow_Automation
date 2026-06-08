import { test, expect } from '@playwright/test';
import { ok } from 'node:assert';

    test('getting user details', async ({ request }) => {
        //await request.get('https://dotesthere.com/api/users?page=1&limit=10')
        const response = await request.get('https://dotesthere.com/api/users?page=1&limit=10');
            expect(response.ok()).toBeTruthy();
           // expect(response.body);
           const body = await response.json();
            console.log(body.data[0].email);
            console.log(body.data);

})
// {
//   "page": 1,
//   "per_page": 10,
//   "total": 12,
//   "total_pages": 2,
//   "data": [
//     {
//       "id": 1,
//       "email": "george.bluth@dotesthere.com",
//       "first_name": "George",
//       "last_name": "Bluth",
//       "avatar": "https://dotesthere.com/img/faces/1-image.jpg"
//     },
//     {
//       "id": 2,
//       "email": "janet.weaver@dotesthere.com",
//       "first_name": "Janet",
//       "last_name": "Weaver",
//       "avatar": "https://dotesthere.com/img/faces/2-image.jpg"
//     }
//   ]
// }