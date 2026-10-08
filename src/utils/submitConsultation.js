const NOCODB_ENDPOINT = 'https://data.nextgency.vn/api/v1/db/data/noco/pt23og868jycyzo/mmw1iwmnal17i0t';
const NOCODB_TOKEN = 'dY0LCW8ChnwtfC6KiA94S17SaBax6RGRaZ4LMaHb';

const postRecord = (payload) => fetch(NOCODB_ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'xc-token': NOCODB_TOKEN
    },
    body: JSON.stringify(payload)
});

/* Gửi đề xuất hợp tác từ cổng thông tin đối tác Activate lên cùng bảng NocoDB.
 * Không thêm cột mới: hình thức hợp tác ghi vào `class` (tiền tố "Activate - " để lọc riêng),
 * tên doanh nghiệp + MST ghi vào `brand_name`, chức vụ ghép vào tên người liên hệ. */
export const submitPartnerProposal = (formData) => postRecord({
    customer_name: formData.position ? `${formData.name} - ${formData.position}` : formData.name,
    phone: formData.phone,
    email: formData.email,
    business_field: 'Activate - Đề xuất hợp tác',
    brand_name: formData.taxId ? `${formData.company} (MST ${formData.taxId})` : formData.company,
    class: `Activate - ${formData.type}`,
    consultation_request: formData.message,
    created_at: new Date().toISOString(),
    status: 'New'
});

/* Gửi form tư vấn lên NocoDB. Dịch vụ cần tư vấn được ghi vào cột `class`. */
export const submitConsultation = (formData) => postRecord({
    customer_name: formData.customer_name,
    phone: formData.phone,
    email: formData.email,
    business_field: formData.business_field,
    brand_name: formData.brand_name,
    class: formData.service,
    consultation_request: formData.consultation_request,
    created_at: new Date().toISOString(),
    status: 'New'
});
