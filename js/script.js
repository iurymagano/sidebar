const btn = document.querySelector('.menu');
const search = document.querySelector('.search');
const sidebar = document.querySelector('.sidebar');
const dashboard = document.querySelector('.dashboard-content')

btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    dashboard.classList.toggle('active');
});

search.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    dashboard.classList.toggle('active');
});