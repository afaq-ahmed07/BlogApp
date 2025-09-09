const JWT=require('jsonwebtoken');
const secret=process.env.JWT_SECRET;

function createUserToken(user){
    const payload={
        id:user._id,
        fullName:user.fullName,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    };
    const token=JWT.sign(payload,secret);
    return token;
}

function validateUserToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}
module.exports={
    createUserToken,
    validateUserToken,
}