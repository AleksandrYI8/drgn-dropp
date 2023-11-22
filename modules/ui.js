import { dragEnd, dragStart } from "./dragNdrop"

export function reload_tasks(arr, places) {
    places.forEach(el => el.innerHTML = "")

    for (let todo of arr) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let p = document.createElement('p')

        div.classList.add('fill')
        div.setAttribute('draggable', true)
        div.setAttribute('data-id', todo.id)

        b.innerHTML = todo.title
        p.innerHTML = todo.description

        div.append(b, p)

            places[todo.status].append(div)
        
        

        div.ondragstart = dragStart
        div.ondragend = dragEnd
    }
}
