// Import luas dan keliling.js
const geometri = require('./luas dan keliling');

// Menghitung luas dan keliling persegi
const sisiPersegi = 5;
const luasPersegi = geometri.luasPersegi(sisiPersegi);
const kelilingPersegi = geometri.kelilingPersegi(sisiPersegi);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);

// Menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 8;
const lebarPersegiPanjang = 6;
const luasPersegiPanjang = geometri.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = geometri.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);