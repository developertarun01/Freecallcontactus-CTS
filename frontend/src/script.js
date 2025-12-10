document.querySelector('.toggle-btn').addEventListener('click', function () {
    const container = document.querySelector('.keyword-container');
    const isHidden = container.style.display === 'none';

    container.style.display = isHidden ? 'block' : 'none';
});
document.querySelector('.keyword-container').addEventListener('click', function () {
    const container = document.querySelector('.keyword-container');
    const isHidden = container.style.display === 'block';

    container.style.display = isHidden ? 'none' : 'block';
});