import React from "react";

const Table = ({ datas }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      {datas.map((data) => (
        <tbody>
          <tr key={data.id}>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
