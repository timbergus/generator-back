# <%= appName %> (<%= appVersion %>)

<%= appDescription %>

## Updating packages.

The application needed packages are installed when created the application with `yo back`. To update them you can just navigate to the application folder, remove the old __node_modules__ and reinstall them with the following command:

```bash
npm install
```

Then, to use the server, we just need to launch locally a Redis server, a MongoDB server and the main server with:

```bash
nodemon server.js
```