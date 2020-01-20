// buat data arraynya
let arrayDuplicate = [1, 34, 6, 1, 1, 6, 34, 8, 8, 9, 1, 6, 1, 1, 45, 56, 1, 89, 'sheena', 'sheena', 'ali']
// buat variable baru untuk nampung
let result = [];
let i = 0;
// fungsi untuk memngeck apakah (n) sudah ada di dalam array
let checkArray = (needle, hasytack) => {
    for (var i = 0; i < hasytack.length; i++) {
        if (hasytack[i] == needle) return true;
    }
    return false
}
while (i < arrayDuplicate.length) {
    for(let a = 0; a < arrayDuplicate.length; a++){
        let checkarray = checkArray(arrayDuplicate[i], result)
        // Jika belum ada maka akan dipush
        if (!checkarray) {
            result.push(arrayDuplicate[i])
        }
    }
    i++
}
console.log(result)
