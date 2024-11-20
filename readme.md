**LUPAAAA : NAMA REPO PROJECT PER TIM NYA YG CANTIK SESUAI APLIKASI YANG DIKERJAKANNYA YAH!!!**
contoh : team10-API-perpustakaan

requirement mini final project backend :

1. REST API => CRUD, tapi gak cuman : contoh register, login, /me => check token ini punya siapa.
2. Dashboard dan fungsi API nya => CRUD setiap resource, ada filter dan search, implementasi pagination. Sidebar/navbar => tiap orang 1 menu/resources **OPTIONAL**
   3 table nya minimal 5, setiap orang 1 table/resource
3. setiap API itu ada validation (minimal password berapa length, email sudah ada dan lain2)

4. setiap API bikin kreatif/sesuai sistem kalian, maksud nya ? jadi kaya yg dibawah ini :
   sesuai db diagram, terdapat 4 resources dalam sistem kita : user, auth, product dan shop.

   1. ASSOCIATE antar models sesuai database diagram nya => INCLUDE, contoh nya : get product include jg model user dan shop nya.
   2. **PELAJARI SENDIRI SEEDER di SEQUELIZE**, lakukan seeder baik **MONGOOSE ataupun SEQUELIZE**.
   3. Buat middleware baru dengan logic kalian, middleware check apakah user pemilik shop (checkOwnership), kunci nya userId pada Shops table
   4. misal : API buat get data product by id, hanya bisa diakses oleh staff/manajer toko nya.
   5. misal : API untuk : update dan delete product hanya bisa dilakukan oleh owner pemilik toko, gunakan **middleware checkOwnership**.
   6. misal : API create product, saat user create product itu **shop id** nya / toko nya sesuai dengan user yang buat.
   7. setiap API untuk get data **INCLUDE** models yang mempunyai relasi nyya, berikan di data pada response API nya.
   8. pinter mainin attributes nya, jadi jangan semua data dikirim sebagai response API nya.
   9. di API get all data, implementasi : DINAMIS SEARCH, FILTER, PAGINATION, SORTING dan **advance query (search query bisa ke relasi table, contoh saat API get product bisa search by shop name nya)**

5. Sequelize ataupun Mongoose, buat serapih mungkin : **DATABASE CREDENTIALS** di sembunyikan, perintah2 nya migration/seeder/create dan undo2 nya, dibikin di dalam script package.json. **.SEQUELIZERC** jangan lupa diterapin.
6. Implementasi : Design Pattern MVC, upload image jangan di local (server => cloudinary/imagekit **HATI2 CREDENTIALS nya**)
7. ada implementasi 1 table ada kolom yg banyak image, 1 table ada kolom yg single image.
8. OPEN API => swagger **PELAJARI SENDIRI** bisa liat di referensi challenge yg udh aku kasih => **setiap orang kerjakan resource**
9. implementasi GOOGLE OAUTH **PELAJARI SENDIRI** **OPTIONAL**
10. implementasi PAYMENT GATEWAY **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
11. implementasi JOOI utk validasi **PELAJARI SENDIRI** **OPTIONAL BANGET**
12. implementasi SENDING EMAIL saat user sukses di create **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
13. implementasi SENDING SMS ke Manajer/ADMIN/PEMILIK TOKO saat ada data di edit oleh STAFF **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
14. implementasi VERIFY USER dengan token/link verifikasi dari email yang dikirim saat user di create **PELAJARI SENDIRI** **OPTIONAL BANGET!!!**
15. database diagram dan readme markdown dibikin sejelas dan secantik mungkin.
16. MAIN PULL REQUEST dan COMMIT MESSAGE SEBAIK MUNGKIN => terutama lead nya.
17. naming VARIABLE/FUNCTION/KOLOM TABLE dan lainnya konsisten bahasa inggris, bahkan error dan sukses message bahasa inggris
18. Postman collection attach di readme ini
19. di readme markdown detail ceritain tentang aplikasi kalian, spt apa nama nya, tujuannya, fitur2 apa aja yg ada sekarang, development kedepannya fitur apa yang bisa kalian tambahkan, database diagram dan lainnya. Seperti contoh di repo ini, liat di bagian bawah readme ini.

    notes :
    optional => level 1 (boleh kalau MVP nya udah)
    optional banget => level 2 (bolehlah)
    optional banget!!! => level 3 (gak usah)

![My Image](/public/img/db-diagram.png)

Management Branch Shop per City
Aplikasi ini untuk kantor pusat, melakukan manajerial toko per kota....

yang dapat dilakukan aplikasi :

- Authentikasi setiap akses API hanya bisa dilakukan oleh logged in user, bahkan di register
- Create Product yang hanya bisa dilakukan oleh Admin atau Manager
- Admin bisa mengurus semua toko, product dan user
- Produk hanya bisa di create oleh Manager sesuai kepemilikan toko nya
- Produk data dapat di filter dinamis per nama produk, nama user yang input produk nya, nama toko. Lalu dapat di limit get data nya serta terdapat pagination.
- Produk data otomatis akan bisa diambil semua data jika role nya admin, jika bukan, data produk nya hanya bisa sesuai toko user/manager nya bekerja.
- .......

berikut database diagram nya :
![My Image](/public/img/db-diagram-v2.jpg)

Yang bisa dikembangkan kedepannya

- aplikasi dapat dikembangkan menjadi toko per branch, bukan lagi toko per kota
- aplikasi bisa dibuat manager mengelola beberapa toko
- aplikasi bisa dibuat manager bisa melakukan register karyawan sesuai toko nya.
- .......

### API DOCUMENTATION

- [API DOCUMENTATION](https://documenter.getpostman.com/view/11108135/2sA3BkbY87)
