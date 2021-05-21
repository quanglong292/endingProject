export default function MovieValidation (movie) {
    const errors = {}
    const {moTa} = movie

    if (moTa.length < 50) {
        errors.moTa = "Mô tả dài hơn 50 ký tự!"
    }
    
    return errors;
}   