# College Attendance Manager - Frontend

[Live Project Link](https://college-attendance-manager-fe.vercel.app/)

[GitHub Repository](https://github.com/vjbravo123/College_attendance_manager_fe.git)

## Overview

The College Attendance Manager frontend is a modern, responsive web application built with **React**. It enables students and teachers to manage attendance efficiently with features like marking attendance, generating reports, tracking statistics, and more. The UI is sleek and interactive, powered by **TailwindCSS**, **Framer Motion**, and other modern libraries.

## Features

* **User Authentication**: Login and signup for students and teachers.
* **Attendance Management**: Teachers can mark attendance for students and view attendance reports.
* **Statistics & Visualizations**: Interactive charts and progress bars display attendance trends.
* **Export Reports**: Export attendance data to Excel using the `xlsx` library.
* **Animations & Effects**: Smooth UI animations powered by `AOS` and `Framer Motion`.
* **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## Tech Stack & Libraries

* **React**: Core frontend library
* **Redux Toolkit**: State management
* **React Router DOM**: Routing and navigation
* **Axios**: HTTP requests
* **TailwindCSS**: Styling
* **@tailwindcss/vite**: Tailwind integration with Vite
* **Framer Motion**: Animation library
* **AOS**: Animate on scroll library
* **React Circular Progressbar**: Circular progress bars for attendance stats
* **React CountUp**: Animated counters for statistics
* **React Icons**: Icon library
* **File Saver**: Export files to local storage
* **XLSX**: Excel file generation

## Folder Structure

```
src/
 ├─ assets/           # Images, icons, and other static assets
 ├─ components/       # Reusable React components
 ├─ pages/            # Page-level components (Login, Dashboard, Reports, etc.)
 ├─ redux/            # Redux slices and store setup
 ├─ utils/            # Utility functions (API calls, helpers)
 ├─ App.jsx           # Main App component with routing
 └─ main.jsx          # Entry point
```

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vjbravo123/College_attendance_manager_fe.git
cd College_attendance_manager_fe
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open in browser:**

Navigate to `http://localhost:5173`.

## Usage

1. **Login / Signup:**

   * Teachers and students can login using their credentials.

2. **Dashboard:**

   * View statistics, attendance trends, and student performance.

3. **Mark Attendance (Teacher Only):**

   * Select class and date to mark attendance.

4. **Export Data:**

   * Export attendance reports to Excel.

## Customization

* Update **API endpoint** in `.env` file:

```
VITE_API_URL=http://localhost:8080
```

* TailwindCSS configuration can be customized in `tailwind.config.js`.

## Deployment

* The project is deployed on **Vercel**: [https://college-attendance-manager-fe.vercel.app/](https://college-attendance-manager-fe.vercel.app/)
* For production build:

```bash
npm run build
```

## Contribution

* Fork the repository
* Create your feature branch (`git checkout -b feature/YourFeature`)
* Commit your changes (`git commit -m 'Add some feature'`)
* Push to the branch (`git push origin feature/YourFeature`)
* Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Author:** Vivek Joshii

**Live Project:** [https://college-attendance-manager-fe.vercel.app/](https://college-attendance-manager-fe.vercel.app/)

**GitHub Repository:** [https://github.com/vjbravo123/College_attendance_manager_fe.git](https://github.com/vjbravo123/College_attendance_manager_fe.git)
