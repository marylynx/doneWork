function countItems() {
    var ulElement = document.getElementById('gardenTools');
    var count = 0;
    for(var i=0; i < ulElement.childNodes.length; i++){
        if(ulElement.childNodes[i].nodeType == 1) count++;
    }
    alert(count + " tools are listed.");
    
    // generate a paragraph
    var para = document.createElement('p');
    //generate a new text node
    var newText = document.createTextNode("The list displays " + count + " tools.");
    // append the text node to the new paragraph
    para.appendChild(newText);
    // locate the paragraph in the DOM
    document.getElementById('content').appendChild(para);
}
window.onload = function() {
    document.getElementById('btn').onclick = countItems;
};