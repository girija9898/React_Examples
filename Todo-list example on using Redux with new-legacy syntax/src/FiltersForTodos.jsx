
import './css/styles.css';
import { useDispatch } from 'react-redux';
import { filterChanged } from './redux/todoSlice';

export default function FiltersForTodos () {

    const dispatch = useDispatch();
    
    const filter = (filterType, e) => {
        e.preventDefault();
        dispatch(filterChanged({filterType}))
    }
    return (
        <form className="filters-list">
            <strong>Filters: </strong>
            <a href="/" onClick={ (e) => {filter("All", e)}} >All</a>
            <a href="/" onClick={ (e) => {filter("Open", e)}} >Open</a>
            <a href="/" onClick={ (e) => {filter("Complete", e)}} >Complete</a>
        </form>
    )
}