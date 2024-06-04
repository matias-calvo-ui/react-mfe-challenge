# Todo List Micro Frontend (MFE)

This project is a standalone React Micro Frontend (MFE) component that encapsulates a fully functional todo list application. It is designed to be easily integrable into various host applications.

## Features

- **Todo Creation**: Users can input a new todo task description and add it to a list.
- **Todo Status**: Tasks have a checkbox to mark them as completed or incomplete, with a visual distinction (strikethrough) for completed items.
- **Todo Persistence**: Todo items are saved using the browser’s localStorage to persist across page refreshes and sessions.
- **Filtering**: Provides buttons to filter the list by "All", "Active", and "Completed" tasks.

## Setup Instructions

### Development

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Application**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### Production

1. **Build the Application**:

   ```bash
   npm run build
   ```

   The built files will be in the `dist` directory.

## Integration

To integrate this MFE into a host application, include the built `bundle.js` file in your host application's HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Host Application</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="path/to/bundle.js"></script>
  </body>
</html>
```

## Design and Architectural Choices

### Structure

The application is structured to ensure separation of concerns and ease of maintenance. Components are divided into individual files with clear responsibilities, and services are used for data persistence.

### TypeScript

TypeScript is used to enhance code reliability and maintainability by providing type safety and catching errors at compile time.

### State Management

State is managed using React's useState and useEffect hooks. Todo items are persisted in localStorage, ensuring data remains available across sessions.

### Error Handling

The application includes error handling for potential issues like unavailable localStorage and invalid input. An ErrorBoundary component is used to catch and handle any rendering errors, ensuring a robust user experience.

### Communication with Host

The TodoList component accepts initial data and change callbacks via props, allowing seamless integration and communication with host applications.

### Testing

Testing is set up to ensure components work as expected. Example tests are provided for adding, toggling and filtering todo items.

### Edge Cases

- LocalStorage Unavailability: The application gracefully handles scenarios where localStorage is unavailable, ensuring it doesn't crash.
- Invalid Input: Ensures only trimmed and non-empty strings are added as todo items.

### Conclusion

This Todo List MFE is designed to be a flexible, maintainable, and robust component that can be easily integrated into various host applications. It leverages the power of React, TypeScript, and modern tooling to provide a seamless development and user experience.
