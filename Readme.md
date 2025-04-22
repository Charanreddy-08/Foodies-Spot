. **Navigate to the Project Directory**:
   ```bash
   cd canteen-management-system
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Add a web app to your Firebase project
   - Enable Firebase Authentication for secure user management
   - Copy the Firebase configuration and create a `firebase.js` file in the project root with your configuration:

     ```javascript
     // firebase.js
     export const firebaseConfig = {
       apiKey: "your_api_key",
       authDomain: "your_auth_domain",
       databaseURL: "your_databaseurl",
       projectId: "your_project_id",
       storageBucket: "your_storage_bucket",
       messagingSenderId: "your_messaging_sender_id",
       appId: "your_app_id"
     };
     ```

   <img src="./Images/firebase-1.png"><img src="./Images/firebase-2.png">

5. **Start the Development Server**:
   ```bash
   npm start
   ```

6. Open the application in your browser at [http://localhost:3000](http://localhost:3000).