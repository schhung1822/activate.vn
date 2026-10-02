// server/vercel.js - bọc handler dạng {status, headers, body} thành Vercel Function
export const toVercelFunction = (handle) => async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');

    // Vercel parse JSON khi đọc req.body và ném lỗi nếu JSON hỏng
    let body;
    try {
        body = req.body;
    } catch {
        res.status(400).json({error: {code: 'invalid_json', message: 'Body không phải JSON hợp lệ.'}});
        return;
    }

    const result = await handle(req, body);
    Object.entries(result.headers || {}).forEach(([name, value]) => res.setHeader(name, value));
    if (result.body === null || result.body === undefined) {
        res.status(result.status).end();
        return;
    }
    res.status(result.status).json(result.body);
};
