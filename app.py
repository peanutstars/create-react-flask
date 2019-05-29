import flask

app = flask.Flask("__main__")


@app.route("/")
def index():
    return flask.render_template("index.html", token="index")


@app.route("/about/", defaults={"name":None})
@app.route("/about/<name>")
def about(name):
    return flask.render_template("index.html", token="about")


@app.route("/posts/", defaults={"id":None})
@app.route("/posts/<id>")
def posts(id):
    return flask.render_template("index.html", token="posts")


app.run(debug=True)
