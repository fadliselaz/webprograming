
function Mahasiswa(nama, energi) {
    this.nama = nama
    this.energi = energi

    this.makan = (porsi) => {
        this.energi += porsi
        console.log(`energi ${this.nama} = ${this.energi}`);

    }

    this.main = (jam) => {
        this.energi -= jam
        console.log(`energi ${this.nama} = ${this.energi}`);

    }
}