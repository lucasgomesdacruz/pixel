import { toast } from './toast.js';

export default function sendEmail() {
    const formElement = document.getElementById('contactForm');

    const handleFormSubmit = (event) => {
        event.preventDefault(); 

        const data = new FormData(formElement);

        fetch(formElement.action, {
            method: formElement.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                formElement.reset(); 
                toast('sucesso', 'Sucesso!', 'Mensagem enviada com sucesso.');
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        alert(data.errors.map(e => e.message).join(", "));
                    } else {E
                        toast('erro', 'Erro!', 'Erro ao enviar, chame no WhatsApp.');
                    }
                });
            }
        }).catch(error => {
            toast('erro', 'Erro!', 'Erro ao enviar, chame no WhatsApp.');
        });
    };

    formElement.addEventListener('submit', handleFormSubmit);
}
