import MyInput from "./MyInput";
export default function NewProject(){
    return<div className="w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="px-6 py-2 rounded-md bg-red-700 text-stone-100 hover:bg-red-900">Cancel</button>
                </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-green-700 text-stone-100 hover:bg-green-900">Save</button>
                </li>
        </menu>
        <div>
            <MyInput label="Title"/>
            <MyInput label="Description" textarea/>
            <MyInput label="Due Date"/>
        </div>
    </div>
}