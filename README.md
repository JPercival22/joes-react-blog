# joes-react-blog

A Simple react based SPA more of a personal gain to update my React knowledge base



Note on serving the local host.

Not all if any of the node_modules (file dependency) will be present, as GIT has a limited file size per push. Therefore, once cloned,
point to the main directory and type in the console:

npm install


This will then look in the package.json and download this folder for you. Once complete, run:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.