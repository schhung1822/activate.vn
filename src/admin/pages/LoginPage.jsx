// src/admin/pages/LoginPage.jsx
import {useState} from 'react';
import {Loader2, LockKeyhole} from 'lucide-react';
import {adminApi} from '../api.js';
import {Button, Field, Notice, TextInput} from '../components/ui.jsx';

const LoginPage = ({configured, onLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');

    const submit = async (event) => {
        event.preventDefault();
        setBusy(true);
        setError('');
        try {
            await adminApi.login(email, password);
            await onLoggedIn();
        } catch (loginError) {
            setError(loginError.message);
            setBusy(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-indigo-50 px-4 py-12">
            <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5">
                <div className="mb-6 flex items-center gap-3">
                    <img src="/assets/images/header/navbarfavicon.png" alt="" className="h-10 w-10 rounded-xl" />
                    <div>
                        <h1 className="text-lg font-bold text-slate-900">Quản trị nội dung</h1>
                        <p className="text-sm text-slate-500">Nextgency</p>
                    </div>
                </div>

                {!configured && (
                    <div className="mb-5">
                        <Notice tone="warning">
                            Chưa cấu hình tài khoản. Thêm <code>ADMIN_EMAIL</code> và <code>ADMIN_PASSWORD</code> vào file{' '}
                            <code>.env.local</code> (hoặc Environment Variables trên Vercel) rồi tải lại trang.
                        </Notice>
                    </div>
                )}

                <div className="space-y-4">
                    <Field label="Email">
                        <TextInput type="email" autoComplete="username" value={email} onChange={setEmail} required autoFocus />
                    </Field>
                    <Field label="Mật khẩu">
                        <TextInput type="password" autoComplete="current-password" value={password} onChange={setPassword} required />
                    </Field>
                    {error && <Notice tone="error">{error}</Notice>}
                    <Button type="submit" disabled={busy || !configured} className="w-full">
                        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <LockKeyhole className="h-4 w-4" />}
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
