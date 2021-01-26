const buttons=document.querySelectorAll('a');
buttons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        // let x=e.clientX -e.target.offsetLeft;
        // let y=e.clientY -e.target.offsetTop;
        let x= e.offsetX;
        let y=e.offsetY;
        // console.log(` clientx: ${e.clientX} clinetY: ${e.clientY} offsetleft: ${e.target.offsetLeft}  offsettop: ${e.target.offsetTop} offsetY: ${e.offsetY} offsetx: ${e.offsetX} `);
         let ripples = document.createElement('span');
        ripples.style.left=x+'px';
        ripples.style.top= y+'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})