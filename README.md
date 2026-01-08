دي الخطوات اللي همشي عليها بالترتيب

1. Overview
2. Approach
3. Key Decisions
4. Challenges & Solutions
5. Tech Stack
6. Installation

## Overview

This project is a web-based screen recording application that allows users to record their screen with a single click, preview the recording, and download it instantly. The main goal was to build a lightweight, privacy-first solution that runs entirely in the browser.

## Approach

هنا بدأت أقسّم المشروع إلى أجزاء رئيسية علشان يكون سهل في الفهم والتطوير، وكان التقسيم كالتالي


1. **UI (User Interface)**
 والجزء ده مسؤول اكيد عن شكل التطبيق وتجربة المستخدم  وهنا قابلني اول تحدي هتكلم عليه تحت في جزء التحديات
2. **Logic & State Management**  
الجزء ده مسؤول عن منطق التطبيق وإدارة الحالات المختلفة.  
ركزت فيه على:
- التحكم في حالات التسجيل (Start / Stop)
- إدارة حالة الفيديو المسجّل
- حساب وعرض مدة التسجيل
- التعامل مع MediaRecorder API 

فصل المنطق عن الواجهة خلى الكود أنضف وأسهل في الصيانة 
والتطوير مستقبلاً


## Decisions

خلال تنفيذ المشروع كان في شوية قرارات مهمة أخدتها علشان أحقق أفضل نتيجة بأبسط شكل ممكن:

1. **استخدام MediaRecorder API**  
اخترت الاعتماد على الـ MediaRecorder API لأنها Native في المتصفح ومش محتاجة Libraries خارجية، وده خلى التطبيق أخف وأسرع، وكمان حافظ على خصوصية المستخدم لأن كل التسجيل بيتم محلياً.

2. **عدم استخدام Backend**  
قررت إن التطبيق يشتغل بالكامل على المتصفح من غير أي سيرفر أو رفع ملفات، علشان:
- أحافظ على خصوصية المستخدم
- أقلل التعقيد
- أخلّي تجربة الاستخدام أسرع وأسهل

3. **Component-Based Architecture**  
استخدمت React Components بشكل واضح، بحيث كل Component ليه مسؤولية محددة، وده سهّل إعادة الاستخدام وخلّى الكود قابل للتطوير مستقبلاً.

4. **بساطة الواجهة**  
ركزت على إن الواجهة تكون بسيطة وواضحة من غير عناصر زيادة، بحيث المستخدم يقدر يبدأ التسجيل ويوقفه من غير أي تعقيد.


## Challenges

أثناء تنفيذ المشروع قابلت شوية تحديات، ودي أهمها وإزاي اتعاملت معاها:

1. **التعامل مع صلاحيات تسجيل الشاشة**  
**التحدي:** المتصفح بيطلب من المستخدم يختار الشاشة أو النافذة، وده ممكن يسبب ارتباك.  
**الحل:** وفّرت تعليمات واضحة وخطوات بسيطة توضّح للمستخدم إيه اللي يحصل قبل وأثناء التسجيل.

2. **إدارة حالة التسجيل**  
**التحدي:** التنقل بين حالات Start و Stop ومزامنة الـ UI مع حالة التسجيل.  
**الحل:** استخدمت State Management [useState] بسيط في React وربطت الواجهة مباشرة بحالة التسجيل.

3. **حساب مدة التسجيل**  
**التحدي:** عرض Timer دقيق ومتزامن مع التسجيل.  
**الحل:** استخدمت Timer مرتبط بحالة التسجيل علشان يبدأ ويقف في الوقت الصحيح.

4. **الحفاظ على تجربة مستخدم سلسة**  
**التحدي:** منع أي تعقيد أو تشويش في الواجهة.  
**الحل:** اعتمدت على تصميم بسيط، Call-To-Action واضح، وخطوات مرتبة.

5. **والتحدي الاكبر والاهم واللي كانت عندي في البدايه هي عدم وضوح الفكره بشكل عام في البدايه ولاكن مع شويه بحث بدات الفكره توضح وكمان من التحديات اللي قابلتني هي عدم وجود وجها برمجيه ثابته امشي عليها**



## Tech Stack

المشروع اتبنى باستخدام مجموعة تقنيات بسيطة وفعّالة، والاختيار كان دايماً بهدف الأداء وسهولة التطوير:

- **React**  
لبناء واجهة المستخدم بنظام Components وتنظيم الكود بشكل واضح.

- **JavaScript (ES6+)**  
لتنفيذ منطق التطبيق والتعامل مع الـ APIs المختلفة.

- **React Bootstrap**  
لتسريع عملية بناء الواجهة مع الحفاظ على تصميم Responsive.

- **Bootstrap Icons**  
لاستخدام أيقونات خفيفة وواضحة داخل التطبيق.

- **MediaRecorder API**  
لتسجيل الشاشة مباشرة من المتصفح بدون أي Libraries خارجية.


هيكل المشروع للفهم 

screen-recorder/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── AppNavbar.jsx
│   │   ├── Features.jsx
│   │   ├── LandingUI.jsx
│   │   ├── RecorderControls.jsx
│   │   ├── Timer.jsx
│   │   └── VideoPreview.jsx
│   │
│   ├── hooks/
│   │   └── useScreenRecorder.js
│   │
│   ├── pages/
│   │   ├── Landing.jsx
│   │   └── Recorder.jsx
│   │
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
└── package.json



## Installation

لتشغيل المشروع على جهازك المحلي، اتبع الخطوات التالية:

1. **Clone المشروع**
```bash
git clone https://github.com/Nader-Gamal3011/ScreenFlow.git
2. الدخول إلى فولدر المشروع
cd ScreenFlow
3.تثبيت الـ Dependencies
npm install
4.تشغيل المشروع
npm run dev
