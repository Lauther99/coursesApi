const VideoService = require('../services/videos.services');

const createVideo = async (req, res) => {
    try {
        const info = req.body;
        const result = await VideoService.newVideo(info);
        res.json(result);
    } catch (error) {
        res.status(404).json(message.error);
    }
};

const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await VideoService.deleteVid(id);
        res.json(result);
    } catch (error) {
        res.status(404).json(message.error);
    }
};

module.exports = {
    createVideo,
    deleteVideo,

};