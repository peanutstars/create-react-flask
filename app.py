import flask

app = flask.Flask("__main__")


@app.route("/")
def my_site():
    return flask.render_template("index.html", token="HelloWorld Flask+React")


app.run(debug=True)