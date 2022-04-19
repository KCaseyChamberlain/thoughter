const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThought,
    getThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts
router
    .route('/')
    .get(getAllThought)
    // .post(createUser);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)

// /api/comments/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/comments/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;