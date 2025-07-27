# 📘 IELTS Course Product Page

This project is built as part of the **Frontend Engineer (Level 1)** assessment for **10 Minute School**.

The goal was to recreate the **IELTS Course by Munzereen Shahid** product page using **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**, by consuming data from their public API.

🔗 Reference Page: [10 Minute School – IELTS Course](https://10minuteschool.com/product/ielts-course/)

---

## ✅ Implemented Features

All required features mentioned in the assessment have been fully implemented:

- ✅ **Product Title** display from API
- ✅ **Rich HTML Description** rendering
- ✅ **Instructor(s)** section (`sections` where `type = "instructor"`)
- ✅ **YouTube Course Trailer** from `media` array
- ✅ **Hardcoded Price** display (৳1000)
- ✅ **CTA Button with Text** (`cta_text`)
- ✅ **Checklist** items from API
- ✅ **What You’ll Learn** section (`sections` where `type = "pointers"`)
- ✅ **Course Layout / Features** (`sections` where `type = "features"`)
- ✅ **Course Details / About the Course** (`sections` where `type = "about"`)
- ✅ **Localization** support (`lang=en` / `lang=bn`)
- ✅ **SEO Meta Tags** setup (using `seo` from API)
- ✅ **Responsive UI** using Tailwind CSS
- ✅ **Reusable Components** for all sections
- ✅ **Server-Side Rendering (SSR)**
- ✅ **Incremental Static Regeneration (ISR)**
- ✅ **TypeScript** with strict typings
- ✅ **Redux** for state management
- ✅ **Next.js server fetching** (headers + query params)
- ✅ **Lucide Icons Integration**
- ✅ **ShadCN UI Components**
- ✅ **Code Splitting & Clean Structure**

---

## 🛠 Technologies Used

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Redux** (State Management)
- **Next.js Server Fetching**
- **Lucide Icons**
- **YouTube Embed**
- **ShadCN UI** (Beautiful pre-built UI components)

---

## 📁 Environment Variable

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_BASE_URL=(your provide api)
```

This variable is used for all API requests via `axios` or other fetching methods.

---

## 🧪 Local Setup

```bash
git clone https://github.com/shafiqulislamsagor-developer/10_minute_school_task.git
cd 10_minute_school_task
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## ✨ Author

**Shafiqul Islam Sagor**  
Frontend Engineer  
[GitHub](https://github.com/shafiqulislamsagor-developer) | [LinkedIn](https://www.linkedin.com/in/shafiqulislamsagor-dev/)

---

**Made with ❤️ for 10 Minute School**
