import { useRef } from "react";
import MyInput from "./MyInput";
export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validaition is coıming

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return<div className="w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="px-6 py-2 rounded-md bg-red-700 text-stone-100 hover:bg-red-900">Cancel</button>
                </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-green-700 text-stone-100 hover:bg-green-900" onClick={handleSave}>Save</button>
                </li>
        </menu>
        <div>
            <MyInput ref={title} label="Title"/>
            <MyInput ref={description} label="Description" textarea/>
            <MyInput ref={dueDate} label="Due Date"/>
        </div>
    </div>
}