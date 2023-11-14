/* eslint-disable react/prop-types */
function TodoItem({title, date}) {
  return (
    <div className="row">
          <div className="col-4 m-3">
            {title}
          </div>
          <div className="col-4 m-3">
            {date}
          </div>
          <div className="col-2 m-3">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
  )
}

export default TodoItem