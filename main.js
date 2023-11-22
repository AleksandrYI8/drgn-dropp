import { delete_dragEnter, delete_dragLeave, delete_dragOver, delete_dragdrop, dragDrop, dragEnter, dragLeave, dragOver } from "./modules/dragNdrop"
import { getData } from "./modules/http"
import { reload_tasks } from "./modules/ui"
export const empties = document.querySelectorAll('.empty')
export let delete_ribush = document.querySelector(".rubish")

delete_ribush.ondragover = delete_dragOver
delete_ribush.ondragenter = delete_dragEnter
delete_ribush.ondragleave = delete_dragLeave
delete_ribush.ondrop = delete_dragdrop 



getData('/tasks')
    .then(res => reload_tasks(res.data, empties))


for (let empty of empties) {
    empty.ondragover = dragOver
    empty.ondragenter = dragEnter
    empty.ondragleave = dragLeave
    empty.ondrop = dragDrop
}