const usermodel = require("../Model/userModel");
const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await usermodel.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        if (user.password !== password) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await usermodel.findById(id);
        done(null, user);
    });
}
module.exports = LocalAuth;