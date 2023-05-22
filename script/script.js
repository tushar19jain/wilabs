var lock = 0;
function opennav(){
    if(lock == 0)
    {
    document.getElementById('navlinksMobile').style.display='block';
    lock = 1;
    }
    else{
    document.getElementById('navlinksMobile').style.display='none';
    lock=0;
    }
}