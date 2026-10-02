// api/admin.js - Vercel Function cho trang /admin. Logic nằm ở server/admin/handler.js.
import {handleAdminRequest} from '../server/admin/handler.js';
import {toVercelFunction} from '../server/vercel.js';

export default toVercelFunction((req, body) =>
    handleAdminRequest({
        method: req.method,
        query: req.query,
        headers: req.headers,
        body,
        env: process.env
    })
);
