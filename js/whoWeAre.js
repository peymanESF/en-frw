function showContent(id) {
    // مخفی کردن همه بخش‌ها
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // نمایش بخش انتخابی
    document.getElementById(id).classList.remove('hidden');

    // هایلایت کردن منوی فعال
    document.querySelectorAll('.pageMenu-item').forEach(item => {
        item.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
}