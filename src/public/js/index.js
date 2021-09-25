    // const gtStdBtn = document.getElementsByClassName('thir-cont-sub-btnn');
    // window.addEventListener('load',()=>{
    //    document.getElementById('gts').classList.add('go-come');
    //    setTimeout(() => {
    //        document.getElementById('gts').classList.remove('go-come');
    //    }, 10000);
    // });
    const lod = document.getElementById('prLoad')
    const ld_func_00=()=>{
        // setTimeout(() => {
            lod.style.display = 'none';
        // }, 3000);  
    };
// ***********************************************************************************************
// ***********************************************************************************************
// ***********************************************************************************************
    // Deleted
// ***********************************************************************************************
// ***********************************************************************************************
// ***********************************************************************************************

const counter = document.querySelectorAll('.num_inc');
const start = () =>{
counter.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCount = () =>{
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;

        console.log(incr)

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`
            setTimeout(updateCount,10);
        }
        else{
            counter.innerHTML = targetCount;
        }
    }
    updateCount();
});
}

window.addEventListener('load',()=>{
    setTimeout(start,6700)
});

// ***********************************************************************************************
// ***********************************************************************************************
// ***********************************************************************************************
const nav_menu = document.getElementById('nav-mobM')
const nav_tog_btn = document.getElementById('nav-hand-barger');
nav_tog_btn.addEventListener('click',()=>{
    nav_menu.classList.add('disp-blc');
});
const cncl = document.getElementById('cncl');
cncl.addEventListener('click',()=>{
    nav_menu.classList.remove('disp-blc')
})