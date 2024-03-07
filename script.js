function toggleMode() {
    const html = document.documentElement
  html.classList.toggle('light')
  
   //pega a tag img 
   const img = document.querySelector('#profile img')

   // substituir a img
    if (html.classList.contains('light')) {

         img.setAttribute("src", './assets/avatar-light.png')
    //se tiver light mode add a img light
    } else {
        img.setAttribute("src", "./assets/avatar-dark.png")
    //se nao manter img normal 
    }
}