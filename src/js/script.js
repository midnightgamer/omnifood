function active() {
    document.querySelector(".box-1").classList.toggle('active');
    document.querySelector(".box-2").classList.remove('active');
    document.querySelector(".box-3").classList.remove('active');
}function active2() {
    document.querySelector(".box-2").classList.toggle('active');
    document.querySelector(".box-1").classList.remove('active');
    document.querySelector(".box-3").classList.remove('active');
}function active3() {
    document.querySelector(".box-3").classList.toggle('active');
    document.querySelector(".box-2").classList.remove('active');
    document.querySelector(".box-1").classList.remove('active');
}