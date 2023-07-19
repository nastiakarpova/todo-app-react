import React from "react"


function Todo(props) {
    return(
        <div>
            <div>
                
                    <input type="checkbox" id={props.item.id} 
                        name="task-inp" className="task-li" />
                    <label 
                        for="task-inp">{props.item.description}
                    </label>
                
            </div>

        </div>
    );
}

export default Todo;