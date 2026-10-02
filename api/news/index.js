// api/news/index.js - GET/POST /api/news (API đăng tin tức, xem docs/news-api.md)
import {handleNewsApiRequest} from '../../server/admin/newsApi.js';
import {toVercelFunction} from '../../server/vercel.js';

export default toVercelFunction((req, body) =>
    handleNewsApiRequest({
        method: req.method,
        id: null,
        query: req.query,
        headers: req.headers,
        body,
        env: process.env
    })
);
