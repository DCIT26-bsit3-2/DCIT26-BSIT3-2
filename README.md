
---

## 📂 Files to Work On
- `src/pages/Users.jsx`
- `src/pages/UserDetails.jsx`

Each file contains **intentional errors** you must find and fix.

---

## 🧩 Activity 1: Users.jsx

### Task
Fix the errors so the page:
- Fetches the user list from the API
- Displays them using the `UserCard` component
- Navigates to `/users/:id` when a user card is clicked

### Hints
- Check the **API endpoint URL**
- Verify the **fetch and JSON parsing**
- Make sure the `UserCard` component is **imported and used correctly**
- Check the **navigate path**
- Review any **typos or missing function calls**

When fixed, the output should display a list of users with their names and details.

---

## 🧩 Activity 2: UserDetails.jsx

### Task
Fix the errors so the page:
- Fetches the correct user details from the API
- Displays **name, email, phone, website, and company name**
- Shows a loading message while fetching

### Hints
- Verify how `useParams()` is called
- Check the **fetch URL**
- Make sure `.json()` is properly used
- Initialize your state correctly to avoid undefined data
- Match property names (`name`, `phone`, etc.)
- Safely access nested objects like `user.company`

When fixed, the page should display:
