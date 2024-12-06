# 🛒 E-Commerce Plant Shop  

This project is a fully functional **E-commerce Plant Shop** platform, designed to provide an intuitive shopping experience. The design for this project is based on the **Figma design**, named *E-commerce Plant Shop*.  
You can view the complete design file here:  
[View Figma Design](https://www.figma.com/files/team/897773647145894802/recents-and-sharing?fuid=897773644276995918)  

---

## ✨ Project Features  
- **Home Page**:  
   - An engaging landing page showcasing top products and promotions.  

- **Shop Page**:  
   - Displays all available products with filter options and detailed product information.  

- **Product Details Page**:  
   - Detailed view of a selected product.  
   - Products are filtered dynamically by their unique `id`. For example: `/product-details/28`.  

- **Cart Page**:  
   - Users can view and manage their selected items.  
   - Items added to the cart are stored in **LocalStorage** for persistence.  

- **404 Page**:  
   - A custom error page for invalid or non-existent routes.  

---



## 🚀 Technologies Used  
- **React**: For building a dynamic and responsive user interface.  
- **Redux Toolkit**: For efficient and centralized state management.  
- **Firebase Authentication**: For secure user registration and login.  
- **Material UI**: For a modern and visually appealing design.  
- **Formik-Yup**: To handle forms and validations effortlessly.  
- **SCSS**: For styling and maintaining modular stylesheets.  

---

## 📂 Folder Structure  
The project is organized with a clean and intuitive folder structure:   

src/  
├── components/       # Reusable components like Header, Footer, etc.  
├── firebase/         # Firebase configuration and authentication functions  
├── hooks/            # Custom hooks for reusable logic  
├── img/              # Images used in the project  
├── items/            # Static data                
├── pages/            # Pages (Home, Cart, Shop, etc.)  
├── store/            # Redux slices and store configuration  
├── styles/           # SCSS files for styling  
└── App.jsx           # Main application entry point  
└── main.jsx           # Main application entry point  

---

## 🔧 Firebase Configuration  
This project uses **Firebase Authentication** for secure user management. The configuration is stored in environment variables for security purposes.  
Here's the Firebase configuration used in the project:  

```javascript
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appID,
    measurementId: import.meta.env.VITE_measurementId
};

Ensure you add the following variables in your .env file:

VITE_API_KEY=your-api-key
VITE_authDomain=your-auth-domain
VITE_projectId=your-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-messaging-sender-id
VITE_appID=your-app-id
VITE_measurementId=your-measurement-id
```
## 📋 Setup and Usage
1. Clone the project repository:
```git clone https://github.com/eyyubveli/E-Commerce-Plant-Shop.git``` <br/>
```cd E-Commerce-Plant-Shop```

2. Install dependencies:
``npm install``

3. Set up Firebase configuration:
Add your Firebase credentials in the ```.env``` file as shown above.

4. Start the development server:
```npm run dev```

5. Open your browser and navigate to the URL shown in the terminal ```(http://localhost:5173)```.


## 🌐 Live Demo
You can check out the live version of the project here:
[Live Demo](https://firstecommerceapp.netlify.app/)  
