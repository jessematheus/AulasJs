const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const date = e.target.querySelector('.data')
    function getDiaSemanaTexto(diaSemana) {
        let diaSemanaTexto;

        switch (diaSemana) {
            case 6:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
            case 0:
                diaSemanaTexto = 'Segunda';
                return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'Terça';
                return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Quarta';
                return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quinta';
                return diaSemanaTexto;
            case 4:
                diaSemanaTexto = 'Sexta';
                return diaSemanaTexto;
            case 5:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;
            default:
                diaSemanaTexto = 'Invalido';

        }
    }
    const data = new Date(date.value);
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    console.log(diaSemana, data);
    console.log(diaSemanaTexto)
    function setResultado() {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = diaSemanaTexto;
    }
    setResultado();
});
