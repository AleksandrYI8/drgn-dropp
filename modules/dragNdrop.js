import { empties } from "../main"
import { deleteData, getData, patchData } from "./http"
import { reload_tasks } from "./ui"

export function dragStart() {
    this.id = "marked"
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

export function dragEnd() {
    this.removeAttribute('id')
    this.className = 'fill'
}

export function dragOver(event) {
    event.preventDefault()
}

export function dragEnter(event) {
    event.preventDefault()
    this.className += ' hovered'
}


export function dragLeave() {
    this.className = 'empty'
}

export function dragDrop(params) {

    let marked_div = document.getElementById('marked')
    let id = marked_div.dataset.id
    this.className = 'empty'
    this.append(marked_div)
    marked_div.status = this.getAttribute("data-status")

    patchData("/tasks/" + id, { status: this.dataset.status })
        .then(res => {
            console.log(res);
        })



}






export function delete_dragOver(event) {
    event.preventDefault()
}

export function delete_dragEnter(event) {
    event.preventDefault()

}

export function delete_dragLeave() {

}

export function delete_dragdrop() {
    let marked_div = document.getElementById('marked')
    let id = marked_div.dataset.id



    deleteData("/tasks/" + id)
        .then(res => {
            console.log(res);
            getData("/tasks")
            .then(res => reload_tasks(res.data, empties))
        })
}


