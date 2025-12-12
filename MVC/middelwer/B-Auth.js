const isAuth = (req, res, next) => {
    const id = req.cookies.users;
    if (!id) {
        return res.redirect('/user/r_user');
    }
    next();
}
module.exports = isAuth;