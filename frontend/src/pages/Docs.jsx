import React from 'react';

const Docs = () => {
  return (
    <div className="bg-black text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Car Management Application API Documentation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Authentication Endpoints</h2>
        <div className="text-lg">
          <h3 className="font-medium mb-2">1. Register User</h3>
          <p>Create a new user by providing required credentials.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">POST /api/auth/register</code>
          <h4 className="text-xl font-medium mb-2">Request Body:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "username": "string",
  "email": "string",
  "password": "string"
}`}
          </pre>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "message": "User created successfully",
  "user": {
    "id": "userId",
    "username": "string",
    "email": "string"
  }
}`}
          </pre>
        </div>
        <div className="text-lg">
          <h3 className="font-medium mb-2">2. Login User</h3>
          <p>Authenticate a user and provide a token for authorized access.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">POST /api/auth/login</code>
          <h4 className="text-xl font-medium mb-2">Request Body:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "email": "string",
  "password": "string"
}`}
          </pre>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "token": "jwtToken"
}`}
          </pre>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Car Management Endpoints</h2>
        <div className="text-lg">
          <h3 className="font-medium mb-2">1. Create Car</h3>
          <p>Add a new car listing for a logged-in user.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">POST /api/cars</code>
          <h4 className="text-xl font-medium mb-2">Request:</h4>
          <ul>
            <li>Headers:</li>
            <pre className="bg-gray-800 p-2 mb-2">{`Authorization: Bearer <token>`}</pre>
            <li>Form Data:</li>
            <pre className="bg-gray-800 p-2 mb-2">
              {`{
  "title": "string",
  "description": "string",
  "tags": ["string", "string"],
  "images": ["file1", "file2", ...]
}`}
            </pre>
          </ul>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "message": "Car created successfully",
  "car": {
    "id": "carId",
    "title": "string",
    "description": "string",
    "tags": ["string", "string"],
    "images": ["file1", "file2", ...]
  }
}`}
          </pre>
        </div>
        <div className="text-lg">
          <h3 className="font-medium mb-2">2. Get User Cars</h3>
          <p>Retrieve a list of cars created by the logged-in user.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">GET /api/cars</code>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`[
  {
    "id": "carId",
    "title": "string",
    "description": "string",
    "tags": ["string", "string"],
    "images": ["file1", "file2", ...]
  },
  ...
]`}
          </pre>
        </div>
        <div className="text-lg">
          <h3 className="font-medium mb-2">3. Search Cars</h3>
          <p>Search for cars based on specified filters like title, tags, etc.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">GET /api/cars/search</code>
          <h4 className="text-xl font-medium mb-2">Parameters:</h4>
          <ul>
            <li>title (optional): "string"</li>
            <li>tag (optional): "string"</li>
          </ul>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`[
  {
    "id": "carId",
    "title": "string",
    "description": "string",
    "tags": ["string", "string"],
    "images": ["file1", "file2", ...]
  },
  ...
]`}
          </pre>
        </div>
        <div className="text-lg">
          <h3 className="font-medium mb-2">4. Update Car</h3>
          <p>Edit the details of a car listing by ID.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">PUT /api/cars/:id</code>
          <h4 className="text-xl font-medium mb-2">Request Body:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "title": "new title",
  "description": "new description",
  "tags": ["new tag"],
  "images": ["newFile1", "newFile2"]
}`}
          </pre>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "message": "Car updated successfully",
  "car": {
    "id": "carId",
    "title": "new title",
    "description": "new description",
    "tags": ["new tag"],
    "images": ["newFile1", "newFile2"]
  }
}`}
          </pre>
        </div>
        <div className="text-lg">
          <h3 className="font-medium mb-2">5. Delete Car</h3>
          <p>Remove a car listing from the system.</p>
          <h4 className="text-xl font-medium mb-2">Endpoint:</h4>
          <code className="block bg-gray-800 p-4 mb-4">DELETE /api/cars/:id</code>
          <h4 className="text-xl font-medium mb-2">Response:</h4>
          <pre className="bg-gray-800 p-4 mb-4">
            {`{
  "message": "Car deleted successfully"
}`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
        <p>Authentication is required for all API endpoints. Include the token in the Authorization header as:</p>
        <pre className="bg-gray-800 p-4 mb-4">{`Authorization: Bearer <your-token>`}</pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deployment Instructions</h2>
        <p>Deploy the application on a cloud provider like Heroku or Vercel:</p>
        <ol className="list-decimal ml-6">
          <li>Navigate to the backend folder: <code className="bg-gray-800 p-2">cd backend</code></li>
          <li>Install dependencies: <code className="bg-gray-800 p-2">npm install</code></li>
          <li>Set up environment variables like <code className="bg-gray-800 p-2">MONGODB_URI</code>, <code className="bg-gray-800 p-2">PORT</code>, and <code className="bg-gray-800 p-2">JWT_SECRET</code></li>
          <li>Run the server: <code className="bg-gray-800 p-2">npm start</code></li>
        </ol>
      </section>
    </div>
  );
};

export default Docs;
