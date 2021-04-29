export default function ValidaUser(users) {
    const errors = {}
    const {matKhau} = users
    if (!users.matKhau) {
        errors.matKhau = "Cần cung cấp mật khẩu!"
    }
    
    return errors;
}