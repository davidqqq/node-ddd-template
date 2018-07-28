import app from "./app";

app.listen(3000, () => {
    console.log("  %s is running at http://localhost:%d in %s mode");
    console.log("  Press CTRL-C to stop\n");
});
