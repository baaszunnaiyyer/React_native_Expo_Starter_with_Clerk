# Expo Starter App with Clerk Authentication

This repository provides a fully set up Expo project with authentication powered by **Clerk**. You can clone the repo and start building your app immediately without worrying about the initial setup.

## 🚀 Features

- **Expo with React Native**: Pre-configured Expo project.
- **Clerk Authentication**: Sign-up, Sign-in, and authentication flow already implemented.
- **Welcome Screens**: Initial welcome pages included.
- **Environment Variables**: Easily configurable via `.env`.

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/baaszunnaiyyer/react_native_expo_starter_with_clerk
 cd react_native_expo_starter_with_clerk
```

### 2️⃣ Install Dependencies
```sh
 npm install
 # OR
 yarn install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add your Clerk API keys:

```env
 EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> 📝 **Note**: Get your Clerk API keys from the [Clerk Dashboard](https://clerk.dev/).

### 4️⃣ Start the Development Server
```sh
 npm start
 # OR
 expo start
```

## 🛠️ Project Structure
```plaintext
📂 your-repo-name
│── 📂 app
│   │── _layout.tsx
│   │── +not-found.tsx
│   │── index.tsx
│   │── 📂 (auth)
│   │   │── _layout.tsx
│   │   │── sign-in.tsx
│   │   │── sign-out.tsx
│   │   │── welcome.tsx
│   │── 📂 (root)
│   │   │── _layout.tsx
│   │   │── 📂 (tabs)
│   │   │   │── _layout.tsx
│   │   │   │── history.tsx
│   │   │   │── home.tsx
│   │   │   │── profile.tsx
│   │   │   │── rides.tsx
│── 📂 assets
│── 📂 components
│── 📂 constants
│── 📂 scripts
│── 📂 types
│── .eslintrc.js
│── .gitignore
│── app.json
│── babel.config.js
│── cache.ts
│── global.css
│── metro.config.js
│── nativewind-env.d.ts
│── nativewind.d.ts
│── package-lock.json
│── README.md
│── tailwind.config.js
│── tsconfig.json
```

## ✨ Contributing
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

---

Happy coding! 🚀

