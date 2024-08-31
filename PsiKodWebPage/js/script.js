// EmailJS kütüphanesini başlatma
(function(){
    emailjs.init("HZBccd8rHvTdApjuR"); // Public Key'inizi buraya ekleyin
})();

// Formun submit olayı için event listener ekleme
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

        // Form verilerini gönderme
        emailjs.sendForm('service_jksrmfx', 'template_knfclhc', this)
            .then(function(response) {
                alert('Mesajınız başarıyla gönderildi!', response.status, response.text);
            }, function(error) {
                alert('Mesaj gönderilirken bir hata oluştu...', error);
            });
    });
});

// Textarea otomatik boyutlandırma
const textarea = document.getElementById('message');
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Modal ve checkbox işlevselliği
var modal = document.getElementById("termsModal");
var termsLabel = document.getElementById("terms-label");
var span = document.getElementsByClassName("close")[0];
var acceptBtn = document.getElementById("acceptBtn");
var termsCheckbox = document.getElementById("terms");

// Label tıklanırsa, modalı göster
termsLabel.onclick = function() {
    modal.style.display = "block";
}

// X tıklanırsa, modalı kapat
span.onclick = function() {
    modal.style.display = "none";
}

// Kabul et butonuna tıklanırsa, checkbox işaretlenir ve modal kapanır
acceptBtn.onclick = function() {
    termsCheckbox.checked = true;
    modal.style.display = "none";
}

// Kullanıcı modaldan başka bir yere tıklarsa, modalı kapat
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
