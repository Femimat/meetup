import "../Assets/Styles/Ticket.css"
function Ticket() {
    return(
      <div className="price-container">
        <h2 id="price-tict">Buy Tickets</h2>
        <div className="price-list">
            <div className="price">
              <h3>Early Bird Ticket</h3>
              <p id="ticket">$399</p>
              <p>All days entry pass for all events.</p>
              <button className="btn-ny">BUY (6 REMAINING)</button>
            </div>

            <div className="price">
              <h3>Workshop Pass</h3>
              <p id="ticket">$199</p>
              <p>Entry pass for each workshop</p>
              <button className="btn-ny">BUY (42 REMAINING)</button>
            </div>
        </div>
      </div>
    )
}

export default Ticket
