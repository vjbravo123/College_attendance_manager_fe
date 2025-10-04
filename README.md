# 🎓 College Attendance Manager - Frontend

[🚀 Live Project Link](https://college-attendance-manager-fe.vercel.app/)
[💻 GitHub Repository](https://github.com/vjbravo123/College_attendance_manager_fe.git)

---

## 🌟 Overview

Welcome to the **College Attendance Manager Frontend**! This responsive React application provides students and teachers a smooth and interactive experience to manage attendance efficiently.

<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Frontend GIF" width="400" />

## 🎯 Features

* 🔐 **User Authentication**: Login and signup for students and teachers.
* 📝 **Attendance Management**: Mark and view attendance.
* 📊 **Statistics & Visualizations**: Interactive charts and progress bars display trends.
* 📁 **Export Reports**: Export attendance data to Excel using `xlsx`.
* ✨ **Animations & Effects**: Smooth UI animations powered by `AOS` and `Framer Motion`.
* 🌐 **Responsive Design**: Looks great on desktop, tablet, and mobile.

## 🛠️ Tech Stack & Libraries

* **React**: Core library ⚛️
* **Redux Toolkit**: State management 📦
* **React Router DOM**: Routing and navigation 🔗
* **Axios**: HTTP requests 🌐
* **TailwindCSS**: Styling 🎨
* **Framer Motion**: Animation library ✨
* **AOS**: Animate on scroll 🌀
* **React Circular Progressbar**: Progress indicators ⭕
* **React CountUp**: Animated counters 🔢
* **React Icons**: Icons library 🎭
* **File Saver**: Export files 💾
* **XLSX**: Excel generation 📊

## 📂 Folder Structure

```
src/
 ├─ assets/           # Images, icons, static assets
 ├─ components/       # Reusable React components
 ├─ pages/            # Page-level components (Login, Dashboard, Reports, etc.)
 ├─ redux/            # Redux slices and store setup
 ├─ utils/            # Utility functions (API calls, helpers)
 ├─ App.jsx           # Main App component with routing
 └─ main.jsx          # Entry point
```

## 🚀 Installation

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

Navigate to `http://localhost:5173`

## 🔗 Usage

1. **Login / Signup:**

   * Teachers and students can login with their credentials.

2. **Dashboard:**

   * View statistics, attendance trends, and student performance.

3. **Mark Attendance (Teacher Only):**

   * Select class and date to mark attendance.

4. **Export Data:**

   * Export attendance reports to Excel.

## 🎨 Customization

* Update **API endpoint** in `.env` file:

```
VITE_API_URL=http://localhost:8080
```

* TailwindCSS configuration can be customized in `tailwind.config.js`.

## 🌐 Deployment

* Deployed on **Vercel**: [https://college-attendance-manager-fe.vercel.app/](https://college-attendance-manager-fe.vercel.app/)
* For production build:

```bash
npm run build
```

## 🤝 Contribution

* Fork the repo 🍴
* Create a feature branch (`git checkout -b feature/YourFeature`)
* Commit your changes (`git commit -m 'Add some feature'`)
* Push to branch (`git push origin feature/YourFeature`)
* Open a Pull Request 🔃

## 📄 License

MIT License

---

**Author:** Vivek Joshii
**Live Project:** [https://college-attendance-manager-fe.vercel.app/](https://college-attendance-manager-fe.vercel.app/)
**GitHub Repository:** [https://github.com/vjbravo123/College_attendance_manager_fe.git](https://github.com/vjbravo123/College_attendance_manager_fe.git)
