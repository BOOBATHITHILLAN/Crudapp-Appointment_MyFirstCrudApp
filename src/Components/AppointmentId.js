
import { useParams } from "react-router-dom";

function AppointmentId({ create }) {
  const { id } = useParams();
  

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ToMeet</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose of Meating</th>
          </tr>
        </thead>
        <tbody>
          {create.map((cr, index) => {
            if (Number(id) === cr.Id) {
              return (
                <tr key={index}>
                  <td>{cr.ToMeet}</td>
                  <td>{cr.Date}</td>
                  <td>{cr.Time}</td>
                  <td>{cr.Purpose}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentId;
