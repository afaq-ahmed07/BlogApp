const { validateUserToken } = require("../services/auth");

function checkAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const token = req.cookies[cookieName];
        if (!token) {
            return next();
        }

        try {
            const userPayload = validateUserToken(token);
            req.user = userPayload;
        } catch (error) {
            // console.error("Invalid token:", error.message);
        }

        return next();
    };
}

module.exports={
    checkAuthenticationCookie,
}