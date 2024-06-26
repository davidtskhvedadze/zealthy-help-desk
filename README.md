<h1 align="center">
    Z-Desk
</h1>
<div align="center">
Z-Desk is a help desk application designed to streamline customer service and improve customer satisfaction.
</div>

## Tech Stack
<div align="center">
    <img src="https://skillicons.dev/icons?i=typescript,react,nextjs,tailwindcss,prisma,postgres,supabase" alt="My Skills">
</div>

## Features

- Secure user authentication utilizing JSON Web Tokens (JWT)
- Exclusive admin sign-in capabilities
- Enhanced security with ticket access restricted to admins
- Seamless ticket submission process
- Efficient ticket response system
- Dynamic ticket status updates
- Robust form validation to ensure data integrity
- User-friendly toast notifications for immediate feedback
- Streamlined navigation with pagination
- Loading spinner for improved user experience during data fetch

## Notes
- Username: `admin`
- Password: `password123`
- The application displays 5 tickets per page for optimal readability. Additional tickets are accessible via the pagination feature
- The user interface and styling leverage the `shadcn/ui` library for a modern and responsive design
- When an administrator addresses a ticket, the response will be immediately logged in the browser's console


## Installation

1. Clone the repository: `git clone https://github.com/yourusername/zealthy-help-desk.git`
2. Access the directory: `cd zealthy-help-desk`
3. Install the dependencies: `npm install`
4. Generate Prisma client: `npx prisma generate`
5. Start the server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
7. Add `JWT_SECRET` & `DATABASE_URL` keys to `.env`
