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
                toast('sucesso', 'Sucesso!', 'Mensagem de sucesso.');
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        alert(data.errors.map(e => e.message).join(", "));
                    } else {
                        toast('erro', 'Erro!', 'Mensagem de erro.');
                    }
                });
            }
        }).catch(error => {
            toast('erro', 'Erro!', 'Mensagem de erro.');
        });
    };

    formElement.addEventListener('submit', handleFormSubmit);
}
