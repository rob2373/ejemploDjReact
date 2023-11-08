import { Link } from "react-router-dom"
import '../index.css'
export function Navigation() {
  return (
    
  <div className="flex justify-between py-3">
    
     
        <Link class="navbar-brand"  to='/tasks'>
        <a class="navbar-brand" >  <h1 className="font-bold text-3xl mb-4">Task App </h1></a>
      </Link>
      <Link class="navbar-brand"  to='/tasks-create'><button className="bg-indigo-500 px-3 py-2 rounded-lg">
     Create Task 
      </button>
      </Link>
    </div>

    )
}