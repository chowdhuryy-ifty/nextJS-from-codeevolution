export default function EmployeeListByCategory({employee, employee_name}) {

    return (
        <div>
            The name of the employee is {employee_name}
            {employee.map((e) => {
                return (
                    <div key={e.id}>
                        <p>salary: {e.employee_salary}</p>
                        <p>age: {e.employee_age}</p>

                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    res.setHeader('Set-Cookie', ['name=Ifty'])
    console.log(req.headers.cookie)
    console.log(query)
    const {employee_name} = params
    const response = await fetch(`http://localhost:4000/employee?employee_name=${employee_name}`)

    const data = await response.json()

    return {
        props: {
            employee: data,
            employee_name,
        },
    }
}