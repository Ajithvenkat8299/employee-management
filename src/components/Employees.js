import React from 'react'

const Employees = () => {
    return (
        <div>
            <table class="table-fixed">
            <thead>
                <tr>
                <th class="w-1/2 px-4 py-2">Employee ID</th>
                <th class="w-1/4 px-4 py-2">First name and Last name</th>
                <th class="w-1/4 px-4 py-2">Email</th>
                <th class="w-1/4 px-4 py-2">Department</th>
                <th class="w-1/4 px-4 py-2">Description</th>
                <th class="w-1/4 px-4 py-2">JoinedAt </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border px-4 py-2">001</td>
                <td class="border px-4 py-2">Jack roman</td>
                <td class="border px-4 py-2">Jackroman@gmail.com</td>
                <td class="border px-4 py-2">Movie</td>
                <td class="border px-4 py-2"> -- </td>
                <td class="border px-4 py-2">13/05/2021</td>
                </tr>
                <tr class="bg-gray-100">
                <td class="border px-4 py-2">002</td>
                <td class="border px-4 py-2">Adam jams</td>
                <td class="border px-4 py-2">Adams@gmail.com</td>
                <td class="border px-4 py-2">Production</td>
                <td class="border px-4 py-2"> -- </td>
                <td class="border px-4 py-2">06/11/2021</td>
                </tr>
                <tr>
                <td class="border px-4 py-2">003</td>
                <td class="border px-4 py-2">Chris morris</td>
                <td class="border px-4 py-2">morris@gmail.com</td>
                <td class="border px-4 py-2">Development</td>
                <td class="border px-4 py-2"> -- </td>
                <td class="border px-4 py-2">03/08/2021</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Employees
