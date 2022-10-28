function sliderFunction() {
    const data = [
        'Fortes fortuna adiuvat. - Храбрым судьба помогает.',
        'Dum Spiro, Spero. - Пока дышу – надеюсь.',
        'Mollit viros otium. - Безделье делает людей слабыми.',
        'Vincere aut mori. - Или победить, или умереть.',
        'Homo locum ornat, non hominem locus. - Не место красит человека, а человек - место.',
        'Qui nescit tacere, nescit et loqui. - Кто не умеет молчать, не умеет и разговаривать.',
        'Potius sero quam nunquam - Лучше поздно, чем никогда.',
        'Actum ne agas. - С чем покончено, к тому не возвращайся.',
    ];

    const bgColor = [ '#00a4e4', '#7552cc', '#00205b', '#008eaa', '#1c79c0' , '#0066a1', '#eb5424', '#2a5934'];
    const outField = document.querySelector('body');

    let count = 0;
    let slideCollection;
    

    createDivSlide();

    function createDivSlide() {
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
            let text = document.createElement('div');
            text.textContent = data[i];
            div.append(text);
            outField.append(div);
        }
        outField.onclick = nextSlide;
        slideCollection = document.querySelectorAll('.slide');
    }

    function nextSlide() {
        slideCollection[count].classList.add('hide');
        if (count + 1 < data.length) {
            count++;
        }
        else {
            count = 0;
        }
        slideCollection[count].classList.remove('hide');
        slideCollection[count].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
       
      
    }


    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

document.addEventListener("DOMContentLoaded", sliderFunction);
