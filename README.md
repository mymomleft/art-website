!!!HAD AI MAKE THE README SINCE I WAS LOST AS WELL!!!



Prerequisites
Before running the project, ensure you have the following installed and set up:

1. Node.js
Download and install Node.js from the official website: https://nodejs.org/en.
Make sure to install the LTS (Long Term Support) version.
Verify the installation by running the following commands in your terminal:

node -v
npm -v
These should return the installed versions of Node.js and npm.

2. MongoDB
Download and install MongoDB from the official website: https://www.mongodb.com/try/download/community.
Choose the version compatible with your operating system.
MongoDB can be run locally or on a cloud service (like MongoDB Atlas). For this project, we recommend using MongoDB locally.

3. Project Files
Ensure you have the project files downloaded or cloned to your local machine.
Know the correct file path to your project folder.
Setup Instructions
1. Navigate to the Project Folder
Open your terminal and navigate to the project folder using the cd command. For example:

cd path/to/your/project
2. Install Dependencies
Run the following command to install the required dependencies:

npm install
This will install all the packages listed in the package.json file, including:

express
mongoose
multer
dotenv

3. Set Up MongoDB
If you're using MongoDB locally, make sure the MongoDB server is running. You can start it by running:


mongod
If you're using MongoDB Atlas, update the MONGO_URI in the .env file with your cloud database connection string.

4. Create a .env File
In the root of your project folder, create a .env file and add the following line:

Copy
MONGO_URI=mongodb://localhost:27017/art-website
Replace the URI with your MongoDB connection string if using a cloud service.

Running the Project
1. Start the Server
Run the following command to start the server:

npm start
This will start the server, and you should see a message like:

Server running on http://localhost:3000
2. Access the Website
Open your web browser and go to: http://localhost:3000

3. Upload and Rate Art
Use the file upload form to upload an image.
Rate the uploaded art by clicking on the stars below each image.

Troubleshooting
1. Node.js or npm Not Recognized
Ensure Node.js and npm are installed correctly and added to your system's PATH.
Verify the installation by running:

node -v
npm -v
2. MongoDB Connection Issues
Make sure MongoDB is running (for local setups).
Double-check the MONGO_URI in the .env file.

3. Invalid package.json
If you encounter EJSONPARSE errors, ensure your package.json file contains valid JSON. You can reinitialize it by running:

npm init -y
Deployment

To deploy the website, you can use services like:
Heroku: https://heroku.com
Vercel: https://vercel.com
Render: https://render.com