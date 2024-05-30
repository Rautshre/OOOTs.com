document.addEventListener('DOMContentLoaded', function() {
    const watchButtons = document.querySelectorAll('.watch');
    const downloadButtons = document.querySelectorAll('.download');

    watchButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Watch button clicked');
        });
    });

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Download button clicked');
        });
    });
});
