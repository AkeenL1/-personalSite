const burgerFunc = document.getElementById("burger");
burgerFunc.addEventListener("click",function()
{
    const x = document.getElementById("navLinks");
    x.classList.toggle("navActive");
});
