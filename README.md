# XOBO Delivery Website

Official website for XOBO Delivery Service in Kenya.

## Security Considerations

This project has been secured with several security measures:

1. Environment variables for API keys
2. Content Security Policy via Helmet
3. Input validation on forms
4. CSRF protection
5. Rate limiting for form submissions
6. Email validation
7. XSS protection headers

## Environment Variables

For the project to run properly, create a `.env` file in the root directory with the following variables:

```
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Security Best Practices

1. Never commit `.env` files to version control
2. Regularly update dependencies
3. Use HTTPS in production
4. Implement proper error handling
5. Validate all user inputs
6. Implement rate limiting for API calls