#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envTemplate = `# Environment Variables for XOBO Delivery Website
# Copy this file to .env and fill in your actual values

# Application Configuration
REACT_APP_ENVIRONMENT=development
REACT_APP_VERSION=1.0.0

# API Keys
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

# Business URLs
REACT_APP_BUSINESS_PORTAL_URL=https://biz.xobo.co.ke/
REACT_APP_HELP_GUIDE_URL=https://scribehow.com/viewer/Creating_An_Account_And_Managing_Your_Profile__bnodEkxRRriykctCzB8j7w

# Contact Information
REACT_APP_COMPANY_PHONE=+254799396000
REACT_APP_COMPANY_EMAIL=info@xobo.co.ke
REACT_APP_WHATSAPP_NUMBER=254799396000

# Social Media Links (Optional)
REACT_APP_FACEBOOK_URL=
REACT_APP_TWITTER_URL=
REACT_APP_LINKEDIN_URL=
REACT_APP_INSTAGRAM_URL=

# Analytics (Optional)
REACT_APP_GOOGLE_ANALYTICS_ID=
REACT_APP_FACEBOOK_PIXEL_ID=

# Security
REACT_APP_ENABLE_CSP=true
REACT_APP_ENABLE_RATE_LIMITING=true
`;

function createEnvFile() {
  const envPath = path.join(process.cwd(), '.env');
  const envExamplePath = path.join(process.cwd(), '.env.example');
  
  // Create .env.example
  fs.writeFileSync(envExamplePath, envTemplate);
  console.log('✅ Created .env.example file');
  
  // Check if .env already exists
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, envTemplate);
    console.log('✅ Created .env file');
    console.log('⚠️  Please update .env with your actual API keys and configuration');
  } else {
    console.log('⚠️  .env file already exists, skipping creation');
  }
}

function createDirectories() {
  const directories = [
    'src/config',
    'src/utils',
    'src/hooks',
    'src/tests',
    'scripts',
    'docs'
  ];
  
  directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

function updatePackageScripts() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add additional useful scripts
    const additionalScripts = {
      'lint': 'eslint src/ --ext .js,.jsx',
      'lint:fix': 'eslint src/ --ext .js,.jsx --fix',
      'format': 'prettier --write src/',
      'format:check': 'prettier --check src/',
      'analyze': 'npm run build && npx source-map-explorer build/static/js/*.js',
      'setup': 'node scripts/setup.js'
    };
    
    packageJson.scripts = { ...packageJson.scripts, ...additionalScripts };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json scripts');
  }
}

function main() {
  console.log('🚀 Setting up XOBO Delivery project...\n');
  
  try {
    createDirectories();
    createEnvFile();
    updatePackageScripts();
    
    console.log('\n🎉 Setup complete! Next steps:');
    console.log('1. Update .env file with your API keys');
    console.log('2. Run: npm install');
    console.log('3. Run: npm start');
    console.log('\n📚 Documentation:');
    console.log('- Environment setup: README.md');
    console.log('- API keys: https://console.cloud.google.com/ (Google Maps)');
    console.log('- Contact forms: https://web3forms.com/ (Web3Forms)');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { createEnvFile, createDirectories, updatePackageScripts }; 