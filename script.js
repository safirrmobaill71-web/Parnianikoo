// ۱. بخش ساعت دیجیتال
function updateClock() {
    const now = new Date();
    
    // گرفتن ساعت، دقیقه و ثانیه با فرمت دو رقمی
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = ${hours}:${minutes}:${seconds};

    // نمایش تاریخ به صورت ساده میلادی (یا می‌توانید تغییر دهید)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('fa-IR', options);
}

// هر ۱ ثانیه ساعت را آپدیت کن
setInterval(updateClock, 1000);
updateClock(); // اجرای اولیه


// ۲. بخش جملات انگیزشی تصادفی
const quotes = [
    "«موفقیت یعنی از شکستی به شکست دیگر رفتن بدون اینکه اشتیاق خود را از دست بدهید.»",
    "«امروز بهترین زمان برای ساختن آینده‌ای است که فردا به آن نیاز داری.»",
    "«هیچ‌وقت برای تبدیل شدن به آنچه که می‌خواستید، دیر نیست.»",
    "«سخت‌ترین کارها معمولاً ارزشمندترین پاداش‌ها را دارند.»",
    "«با انگیزه شروع کن، با اراده ادامه بده و با افتخار به پایان برسان.»"
];

const quoteBtn = document.getElementById('newQuoteBtn');
const quoteText = document.getElementById('quote');

quoteBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
