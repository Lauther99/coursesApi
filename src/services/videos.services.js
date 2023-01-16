const Videos = require("../models/videos.model");

class VideoService {
    static async newVideo(info) {
        try {
            const result = await Videos.create(info);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async deleteVid(id) {
        try {
            const result = await Videos.destroy({
                where: { id: id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = VideoService;
