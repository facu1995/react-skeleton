import { useState } from "react"
import { useTodos } from "../../../hooks/useTodos";

export const TodoAdd = () => {
    const [descAdd, setDescAdd] = useState("");
    const { addTodo } = useTodos();

    const handleDesc = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setDescAdd(evt.target.value);
    }

    const agregar = () => {
        addTodo(descAdd);
        setDescAdd("");
    }

    return (
        <div>
            <h4>Agregar Todo</h4>
            <input
                value={descAdd} onChange={handleDesc}
                placeholder="Descripcion">
            </input>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}
