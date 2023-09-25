// Import thư viện crypto
const crypto = require('crypto');

// Tạo cặp khóa RSA
const keyPair = crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: 'spki',
  privateKeyEncoding: 'pkcs8',
});

// Lấy khóa công khai
const publicKey = keyPair.publicKey;

// Lấy khóa bí mật
const privateKey = keyPair.privateKey;

// Dữ liệu cần ký
const data = {
  name: 'Nguyễn Văn A',
  address: '123 ABC Street, Ho Chi Minh City',
  phone: '0912345678',
};

// Ký dữ liệu
const signature = crypto.sign(data, privateKey, 'sha256');
console.log()
// Xác minh chữ ký
const isValid = crypto.verify(data, signature, publicKey, 'sha256');

// In kết quả
console.log(isValid); // true