
export default function ValidaUser(users, isExist) {
    const errors = {}
    const {taiKhoan, matKhau} = users
    
    
    if (!matKhau) {
        // "" = false => !false = true
        errors.matKhau = "Cần cung cấp mật khẩu!"
    } else if (matKhau.length < 6) {
        errors.matKhau = "Độ dài hơn 6 ký tự"
    }
    
    if (isExist) {
        errors.taiKhoan = "Tài khoản đã tồn tại"
    }

    return errors;
}