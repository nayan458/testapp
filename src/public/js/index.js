    // const gtStdBtn = document.getElementsByClassName('thir-cont-sub-btnn');
    // window.addEventListener('load',()=>{
    //    document.getElementById('gts').classList.add('go-come');
    //    setTimeout(() => {
    //        document.getElementById('gts').classList.remove('go-come');
    //    }, 10000);
    // });
    const lod = document.getElementById('prLoad')
    const ld_func_00=()=>{
        setTimeout(() => {
            lod.style.display = 'none';
        }, 3000);  
    };
// ***********************************************************************************************
// ***********************************************************************************************
// ***********************************************************************************************
    const nav_min = document.getElementById('main');
    const main_li = document.getElementsByClassName('main-sub-li');
    // const gts = document.getElementById('gts');
    const nav_handel = document.getElementById('nav-handel');
    // const main_li_01 = document.getElementById('main-sub-li_01') 
    const main_li_02 = document.getElementById('main-sub-li_02') 
    const main_li_03 = document.getElementById('main-sub-li_03') 
    const main_li_04 = document.getElementById('main-sub-li_04') 
    const main_li_05 = document.getElementById('main-sub-li_05') 
    const main_li_06 = document.getElementById('main-sub-li_06') 
    const sec_cont = document.getElementById('sec-cont');
    let i = 0;
    nav_handel.addEventListener('click',()=>{
        nav_min.classList.toggle('main-active');
        // gts.classList.toggle('dsply-non'); 
        // main_li_01.classList.toggle('active');
        main_li_02.classList.toggle('active');
        main_li_03.classList.toggle('active');
        main_li_04.classList.toggle('active');
        main_li_05.classList.toggle('active');
        main_li_06.classList.toggle('active');    
        sec_cont.classList.toggle('p-fix')

    });
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

