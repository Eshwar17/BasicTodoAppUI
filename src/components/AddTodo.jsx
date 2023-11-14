function AddTodo() {
  return (
    <div className="container text-center">
        <div className="row">
          <div className="col-6 m-3">
            <input type="text" placeholder="Enter Todo here"></input>
          </div>
          <div className="col-4 m-3">
            <input type="date"></input>
          </div>
          <div className="col-2 m-3">
            <button className="btn btn-success">Add</button>
          </div>
        </div></div>
  )
}

export default AddTodo
