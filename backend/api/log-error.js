
const errors = [];

export default async (req, res) => {
    const { message, error, timestamp, level } = req.body;
    errors.push({ message, error, timestamp, level });
    res.status(200).json({ success: true });
};
