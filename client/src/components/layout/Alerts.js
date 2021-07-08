import AlertContext from "../../context/alert/AlertContext"
import { useContext } from "react"

const Alerts = () => {
  const alertctx = useContext(AlertContext);

  return (
    alertctx.alerts.length>0 && alertctx.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  )
}

export default Alerts;