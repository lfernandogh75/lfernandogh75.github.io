function dowloadPDF(){
    
    // code to download pdf
    // you can use the following code to download the pdf
    const element = document.querySelector('container-lg');
    const opt = {
        margin: 0,
        filename: 'Hoja_de_vida_Luis_Gallegpo.pdf',
        image: { type: 'jpeg', quality: 1,scroll:0 },
        html2canvas: { scale: 2 , useCors:true},
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        enableLinks: true,
    };
    html2pdf()
        .from(element)
        .set(opt)
        .save();
}