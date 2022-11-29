var a=document.getElementById('ChangePhone');
var a=function demSoSP(type)
{

}
function an_DT(type)
{
var n=document.getElementsByClassName(type);
for(var i=0;i<n.length;i++)
{
        n[i].style.display='none';
}
}
function hien_DT(type)
{
var n=document.getElementsByClassName(type);
for(var i=0;i<n.length;i++)
{
        n[i].style.display='block';
}
}
function delete_show(){
        var changeType=document.getElementById('changetype');
        changeType.style.display='none';
}
function ChangeList(type)
{var a=document.getElementById('ChangePhone');
function demSoSP(type)
{
var dt=document.getElementsByClassName(type);
return ': '+ dt.length+ '<p class="sp">sản phẩm</p>';
}
        switch (type) {
                case 'apple':
                        delete_show();
                        document.onload=hien_DT('apple');
                        an_DT('xiaomi');
                        an_DT('samsung');
                        an_DT('oppo');
                        an_DT('vivo');
                        an_DT('nokia');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;
                case 'nokia':
                        delete_show();
                        document.onload=hien_DT('nokia');
                        an_DT('samsung');
                        an_DT('oppo');
                        an_DT('vivo');
                        an_DT('apple');
                        an_DT('xiaomi');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;
                case 'samsung':
                        delete_show();
                        document.onload=hien_DT('samsung');
                        an_DT('xiaomi');
                        an_DT('apple');
                        an_DT('oppo');
                        an_DT('vivo');
                        an_DT('nokia');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;  
                case 'xiaomi':
                        delete_show();
                        document.onload=hien_DT('xiaomi');
                        an_DT('apple');
                        an_DT('samsung');
                        an_DT('oppo');
                        an_DT('vivo');
                        an_DT('nokia');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;  
                case 'vivo':
                        delete_show();
                        document.onload=hien_DT('vivo');
                        an_DT('xiaomi');
                        an_DT('samsung');
                        an_DT('oppo');
                        an_DT('apple');
                        an_DT('nokia');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;  
                case 'oppo':
                        delete_show();
                        document.onload=hien_DT('oppo');
                        an_DT('xiaomi');
                        an_DT('samsung');
                        an_DT('vivo');
                        an_DT('apple');
                        an_DT('nokia');
                        document.getElementById("Sort-Item").style.justifyContent = "flex-start";
                        break;  
                              
                              
        
                default:
                        
                        hien_DT('xiaomi');
                        hien_DT('apple');
                        hien_DT('samsung');
                        hien_DT('vivo');
                        hien_DT('oppo');
                        hien_DT('nokia');
                        break;
        }
}
document.onload=an_DT('show-hidden');


