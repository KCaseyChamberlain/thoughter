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
    .route('/:thoughtId/reactions')
    .post(addReaction)
    
router.route('/:thoughtId/:reactionId')
    .delete(removeReaction)


module.exports = router;