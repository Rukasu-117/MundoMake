//string (Textos)
// Number (Numero)
onScroll()
window.addEventListener('scroll', onScroll)

function onScroll() 
{
  showNavOnScroll()

  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(products)
  activateMenuAtCurrentSection(about)
  
}

function activateMenuAtCurrentSection(section){
 // Cria uma linha não visivel no meio da pagina visivel
  const targetLine = scrollY + innerHeight / 2
  //Topo da Seção
  const sectionTop = section.offsetTop
  //altura da Seção
  const sectionHeight = section.offsetHeight
// O Topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


  //informações dos dados e da logica
 // console.log('O Topo da seção chegou ou passou da linha ', sectionTopReachOrPassedTargetline)


  //vefifica se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight

  //Final da seção passou da linha
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

 // console.log('O fundo da seção passou', sectionEndPassedTargetline)


  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {

    menuElement.classList.add('active')

  }

}

function showNavOnScroll(){
    /*Adiciona a class scroll no id navigation*/
    if (scrollY > 0)
    {
      navigation.classList.add('scroll')
    }
    /*Remove a class Scroll no id navigation*/   
    else
    {
      navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
      /*Adiciona a class scroll no id navigation*/
      if (scrollY > 400)
      {
        backToTopButton.classList.add('show')
      }
      /*Remove a class Scroll no id navigation*/   
      else
      {
        backToTopButton.classList.remove('show')
      }
}

function openMenu(){
  document.body.classList.add('menu-expansivo')
}
function closeMenu(){
  document.body.classList.remove('menu-expansivo')
}

ScrollReveal({
  origin:'bottom',
  distance: '100px',
  duration: 700,

}).reveal(`
#home,
#home img,
#home .stats,
#products,
#products header
#products .card,
#about,
#about header,
#about .content
`);
