import React from "react"


function Todo(props: any) {

    return(
        <div>
            <div>
                <label>
                    
                    <input type="checkbox" id={props.item.id} 
                        className="task-li" />

                    {props.item.description}

                    <span className="check"></span>
                </label>
            </div>
        </div>
    );
}

export default Todo;