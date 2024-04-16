# Development Process Documentation

## Setup Instructions

### Initializing the Project
1. **Node.js Installation**: Ensure Node.js is installed on your system.
2. **Project Initialization**: Use Vite to initialize a React project with TypeScript template:
   ```bash
   npm init @vitejs/app my-react-app --template react-ts
  ```

3. **Clone Repository**: Use Git to clone the repository:
```bash
git clone https://github.com/Bijesh-Sth/metalogic-redesign.git
  ```

4. **Navigate to Repository**: Move into the cloned repository directory:
```bash
   cd metalogic-redesign
  ```

5. **Install Dependencies**: Install project dependencies:
```bash
   npm install
  ```

6. **Start Development**: Start the development server:
```bash
   npm run dev
  ```

# Deployment Using GitHub Documentation

## Prerequisites
1. **GitHub Repository**: Ensure your project is hosted on GitHub.
2. **Netlify Account**: Sign up for a Netlify account if you haven't already. You can create one at [Netlify](https://www.netlify.com/).

## Deployment Steps
1. **Login to Netlify**: Log in to your Netlify account.

2. **Create New Site from GitHub**:
   - In Netlify's dashboard, click on the "New site from Git" button.
   - Select GitHub as your Git provider.
   - Authorize Netlify to access your GitHub repositories.
   - Choose the repository you want to deploy.

3. **Configure Build Settings**:
   - Netlify will automatically detect your project's build settings based on the repository's configuration file (e.g., `netlify.toml`, `package.json`).
   - If needed, customize the build command and publish directory in Netlify's deploy settings.

4. **Environment Variables** (Optional):
   - Set any required environment variables in Netlify's dashboard under "Build & deploy" > "Environment".
   - These variables might include API keys, environment-specific configurations, etc.

5. **Deploy Site**:
   - Click on the "Deploy site" button to initiate the deployment process.
   - Netlify will fetch your project from GitHub, build it, and deploy it to a unique URL.

6. **Review Deployment**:
   - Once the deployment process is complete, Netlify will provide you with a unique URL for your deployed site.
   - Review your site to ensure everything is working as expected.

## Continuous Deployment
Netlify supports continuous deployment, meaning your site will automatically redeploy whenever you push changes to the configured branch in your GitHub repository.

1. **Set Up Continuous Deployment**:
   - In Netlify's dashboard, navigate to your site's settings.
   - Under "Build & deploy", configure the continuous deployment settings.
   - Link your GitHub repository and choose the branch to monitor for changes.

2. **Push Changes**:
   - Whenever you push changes to the configured branch in your GitHub repository, Netlify will automatically trigger a new build and deploy your changes.
