import { useState } from 'react';

function FormTodo() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async () => {

        try {
            const response = await fetch('/api/todoData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs)
                });

                if (!response.ok) {
                throw new Error('Failed to create todo');
                }

                //const data = await response.json();
                //console.log('Success:', data);
                //alert(`Todo created: ${data.todo.title}`);

                // Optional: clear the form
                setInputs({}); 

            } catch (error) {
                console.error('Error:', error);
                alert('Error creating todo');
        }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Todo Form</legend>
                <label>Enter Title:
                    <input
                    type="text" 
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                    />
                </label><br></br>
                <label>Enter Description:
                    <input
                    type="text"
                    name="description" 
                    value={inputs.description || ""}
                    onChange={handleChange}
                    />
                </label><br></br>
                <input type="submit" />
            </fieldset>
           </form>
        </div>
    );
}

export default FormTodo;