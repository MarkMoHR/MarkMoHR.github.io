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

function initThemeToggle()
{
    var themeToggle = document.querySelector('.theme-toggle');
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (!themeToggle) {
        return;
    }

    updateThemeToggle(themeToggle);
    themeToggle.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        updateThemeToggle(themeToggle);
    });
}

function updateThemeToggle(themeToggle)
{
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var nextThemeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('title', nextThemeLabel);
    themeToggle.setAttribute('aria-label', nextThemeLabel);
}

document.addEventListener('DOMContentLoaded', initThemeToggle);