function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed in element " + ulElement.getAttribute('id'));
    var bodyElement = document.getElementsByTagName('body');
    console.log(bodyElement);
    bodyElement[0].setAttribute('style', 'background-color: blue');

}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};