export default function EmployeeList({employees}) {

    return (
        <div>
            <h1>List of employees</h1>
            <hr/>
            {employees.map(employee => {
                return (
                    <div key={employee.id}>
                        <p>{employee.employee_name}</p>
                        <p>{employee.employee_salary}</p>
                        <p>{employee.employee_age}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:4000/employee`)
    const data = await response.json()

    return {
        props: {
            employees: data,
        },
    }
}