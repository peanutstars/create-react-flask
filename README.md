# create-react-flask

The test app with both react and flask.

It refer as follows:
  + branch: flask-react
    + How to use flask with react.
      + https://www.youtube.com/watch?v=_RSVoqXWzSw
  + branch: react-router 
    + How to use react-router and Two methods for code splitting.
      + https://velopert.com/3417
      + https://velog.io/@velopert/react-code-splitting
  + branch react-ajax
    + How to use async process of AJAX
      + https://velopert.com/2597


## Setup Order

1. create-react-app client
2. cd client
3. yarn
4. yarn eject
5. edit files
    + Look at the edited codes as the command 'gitk v0.0'
    + client/config/paths.js, client/config/webpack.config.js, client/package.json, client/public/index.html, client/src/App.js
6. yarn build
7. cd <repo_base>
8. edit files
    + Look at the edited codes as the command 'gitk v0.0'
    + app.py 
9. python app.py
10. Connect browser to http://localhost:5000


## After Clone

1. git clone https://github.com/peanutstars/create-react-flask.git
2. cd create-react-flask
3. make init
4. make build && python app.py
5. git checkout <flask-react|react-router|...>
