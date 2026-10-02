// api/news/[id].js - GET/PATCH/PUT/DELETE /api/news/{id} (xem docs/news-api.md)
import {handleNewsApiRequest} from '../../server/admin/newsApi.js';
import {toVercelFunction} from '../../server/vercel.js';

export default toVercelFunction((req, body) => {
    const {id, ...query} = req.query;
    return handleNewsApiRequest({
        method: req.method,
        id,
        query,
        headers: req.headers,
        body,
        env: process.env
    });
});
