const { Router } = require('express');
const router = Router();

const {
    createVideo,
    deleteVideo,

} = require('../controllers/videos.controller');

router.post('/videos/create', createVideo);

router.delete('/videos/:id/delete', deleteVideo);

module.exports = router;