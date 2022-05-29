import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getInvoice, deleteInvoice } from "./data"

const Invoice = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let params = useParams()
  // Get the :invoiceId param from the URL
  // Note that the key of the param on the params object
  // is the same as the dynamic segment in the route path
  // :invoiceId -> params.invoiceId
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  // Note parseInt around the param
  // URL params are always a string

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number)
            navigate("/invoices" + location.search)
          }}
        >
          Delete
        </button>
      </p>
    </main>
  )
}

export default Invoice
