const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createdUser,
    deletedUser,
    updatedUser,
    createFriend,
    deleteFriend,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createdUser)

router
    .route('./:userId')
    .get(getSingleUser)
    .delete(deletedUser)
    .put(updatedUser)

router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend)

module.exports = router