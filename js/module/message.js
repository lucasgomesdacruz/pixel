export default function message() {
    const buttons = document.querySelectorAll("#message");
    const tel = '5521974966484';
    
    function mensageWpp() {
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                let texto = `Olá *Pixel Creative*, gostaria de iniciar um projeto.`;
                let encode = encodeURIComponent(texto);
                let URL = `https://wa.me/${tel}?text=${encode}`;

                window.open(URL, `_blank`);
            });
        });
    }
    mensageWpp();
}