# React + TypeScript + Vite

# מטרת התרגול

מטרת העל של התרגול היא ללמוד איך להשתמש בספריית React Hook Form.

## מטרות נוספות:

- תרגול קריאת דוקומנטציה
- השתלבות בקוד של מישהו אחר

## מידע מקדים

לרשותכם פרוייקט נתון המכיל טופס פשוט עם 3 תגיות input מסוג text וכפתור submit.

בלחיצה על הכפתור ערכי הטופס מוצגים ב-alert.

## משימה

יש לבצע רפקטור לפרוייקט הנתון כך שהטופס יעבוד עם React Hook Form.

יש להעתיק את תיקיית הפרוייקט, להתקין את כל התלויות ולהריץ את הפרוייקט.

המקור למידע הוא הדוקומנטציה הרשמית של React Hook Form:
[React Hook Form](https://react-hook-form.com/)

יש להשתמש בספרייה כדי ליצור ולידציות על האינפוטים, כך שלא יהיה אפשר לשלוח את הטופס ולהציג הודעות שגיאה בהתאם.

### ולידציות

#### username

- חובה
- לפחות 2 תווים

#### email

- חובה
- חייב להיות תקין - text@text.text

#### password

- חובה
- חייבת להכיל מספר
- חייבת להכיל אות גדולה
- חייבת להכיל אות קטנה
- חייבת להכיל תו מיוחד
- לפחות 8 תווים
- לא יותר מ-20 תווים

#### בונוס

- להוסיף תגיות מעבר ל-input text
- להשתמש ב-ErrorMessage Component מ- React Hook Form

## דגשים

- תרגול ב-TypeScript
- שמירה על קונבנציות
- לא להתעסק ב-CSS


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# ex-hook-form-in-react
