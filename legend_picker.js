function legendClick() {
    // Get parent figure element to add notation.
    let parent = this.parentNode;

    console.log(parent.parentNode.children)

    // Remove active notation from parent siblings.
    Array.from(parent.parentNode.children).forEach(child =>
        child.classList.remove("active"))

    // and add the active to this captions parent.
    parent.classList.add("active")
}

document
    .querySelectorAll('.legend-picker figcaption')
    .forEach(elem => elem.addEventListener("click", legendClick))


// Double check that at least one figure is active.
document
    .querySelectorAll('.legend-picker figure:first-child figcaption')
    .forEach(elem => legendClick.call(elem))
