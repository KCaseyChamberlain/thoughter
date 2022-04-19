const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThought,
    getThoughtById,
    updateThought,
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts
router
    .route('/')
    .get(getAllThought)

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/comments/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)

// /api/comments/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;