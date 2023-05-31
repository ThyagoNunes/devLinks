function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de Thyago Nunes olhando de perfil com sobrancelha arqueada, usando óculos e com fone de ouvido aparente"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Foto de Thyago Nunes sorrindo, usando casaco com capuz e com efeito blur"
    )
  }
}