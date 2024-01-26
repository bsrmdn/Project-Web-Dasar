const categoryList = ["Semua", "Hardware", "Teknologi", "Laptop", "Handphone"];

const articleList = [
    {
        title: "Memilih HP Ideal: Panduan Lengkap Sesuai Kebutuhan Anda",
        thumbnail: "assets/image/kumpulan-handphone.jpg",
        categories: [categoryList[4]],
        excerpt: "Handphone (HP) kini menjadi bagian integral dari kehidupan sehari-hari. Dari komunikasi hingga akses informasi, hiburan, dan media sosial, HP memiliki berbagai fungsi. Namun, dengan berbagai merek dan model yang tersedia,…"
    },
    {
        title: "Apakah SSD Cocok Untuk Laptopmu? Ketahui Dahulu Hal Berikut",
        thumbnail: "assets/image/bentuk-ssd.jpg",
        categories: [categoryList[1], categoryList[3]],
        excerpt: "Laptop yang sudah tua dan tidak berfungsi dengan cepat dapat sangat mengganggu. Meskipun Anda mungkin memikirkan untuk menggantinya, tunggu sebentar. SSD adalah solusi untuk tindakan kecil yang dapat membuat perbedaan…"
    },
    {
        title: "HP mu Mengalami Bootloop? Ini Penyebab dan Cara Mengatasinya",
        thumbnail: "assets/image/oppo-booting-animation.png",
        categories: [categoryList[1], categoryList[4]],
        excerpt: "Halo, sobat Tech! Apakah kamu pernah mengalami hp bootloop? Bootloop adalah kondisi di mana hp tidak bisa masuk ke sistem operasi dan hanya menampilkan logo atau animasi awal terus-menerus. Tentu..."
    },
    {
        title: "5 Jenis SSD serta Kelebihan dan Kekurangannya masing-masing!",
        thumbnail: "assets/image/bentuk-hdd-dan-ssd.jpeg",
        categories: [categoryList[2]],
        excerpt: "Apakah Anda sedang mencari SSD yang cocok untuk kebutuhan Anda? Apakah Anda bingung dengan berbagai jenis SSD yang ada di pasaran? Jika ya, maka artikel ini adalah untuk Anda. Dalam…"
    },
];

// Looping kategori untuk ditampilkan pada navbar kategori
const categoriesDropdown = document.getElementById("categories");
categoryList.forEach(category => {
    let p = document.createElement("p");

    p.setAttribute("onclick", "categoryFilter('" + category + "')")
    categoriesDropdown.appendChild(p).append(category);
});

// Looping artikel
const content = document.getElementById("content");
articleList.forEach(article => {
    let title = document.createElement("h2");
    title.append(article.title);

    let thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", article.thumbnail);
    thumbnail.setAttribute("class", "featured-image");

    let categoryLabel = document.createElement("div");
    categoryLabel.setAttribute("class", "category-label");
    article.categories.forEach(category => {
        categoryLabel.appendChild(document.createElement("span")).append(category);
    });

    let excerpt = document.createElement("p");
    excerpt.append(article.excerpt);

    let articleBody = document.createElement("section");
    articleBody.setAttribute("class", "article-body");
    articleBody.appendChild(categoryLabel);
    articleBody.appendChild(title);
    articleBody.appendChild(excerpt);

    let articleCard = document.createElement("article");
    articleCard.setAttribute("class", "card");
    articleCard.ariaLabel = article.categories;
    articleCard.appendChild(thumbnail);
    articleCard.appendChild(articleBody);

    content.appendChild(articleCard);
});

// Filter konten sesuai kategori
function categoryFilter(category) {
    const articles = document.getElementsByTagName("article");

    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = articles[i].ariaLabel.match(category) != null || category == "Semua" ? "block" : "none";
    }
}
