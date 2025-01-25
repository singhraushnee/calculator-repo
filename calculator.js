function getval(x)
{
    document.getElementById('res').value+=x
}
function cls()
{
    document.getElementById('res').value=""
}
function result()
{
    let r=eval(document.getElementById('res').value)
    document.getElementById('res').value=r
}