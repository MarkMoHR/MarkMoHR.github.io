// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'block') {
            bib [0] .style.display = 'none' ;
        } else {
            bib [0] .style.display = 'block' ;
        }
    }
}

function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   if (block.style.display == 'block') {
    block.style.display = 'none' ;
   } else {
    block.style.display = 'block' ;
   }
}

function hideblock(blockId)
{
   var block = document.getElementById(blockId);
   block.style.display = 'none' ;
}