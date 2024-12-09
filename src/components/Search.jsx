export default function Search(props) {
    return (
        <div className={"Search " + props.searchClass}>
            <input placeholder="Поиск..."></input>
        </div>
    )
}