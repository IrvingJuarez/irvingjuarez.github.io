down = (id) => {
    const arrow = document.getElementById(id)
    const article = document.getElementById(`${String(id).replace(`row`, `ticle`)}`)

    if(arrow.style.transform === `rotate(180deg)`){
        arrow.style.transform = `rotate(0deg)`
        article.style.display = "none"
    }else{
        arrow.style.transform = `rotate(180deg)`
        article.style.display = "flex"
    }
}