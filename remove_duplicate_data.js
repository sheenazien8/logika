// buat data arraynya
let arrayDuplicate = [1, 34, 6, 1, 1, 6, 34, 8, 8, 9, 1, 6]
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
        // nggak boleh ngecheck diririnya sendiri
        if (i != a) {
            // kondisi untuk ngechek index i apakah sama dengan a
            if (arrayDuplicate[i] == arrayDuplicate[a]) {
                let checkarray = checkArray(arrayDuplicate[i], result)
                // jika hasil dari check array false atau belum ada maka akan di push
                if (!checkarray) {
                    result.push(arrayDuplicate[i])
                }
            }else {
                // else ini untuk masukin array yang tidak mempunya nilai yang sama
                let checkarray = checkArray(arrayDuplicate[i], result)
                // jika hasil dari check array false atau belum ada maka akan di push
                if (!checkarray) {
                    result.push(arrayDuplicate[i])
                }
            }
        }
    }
    i++
}
console.log(result)
