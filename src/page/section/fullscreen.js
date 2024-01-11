function List({children}) {
    return (
        <div className="bg-heavy lib-grid py-32">
            <div className="lib-grid-xl">
                {children}
            </div>
        </div>
    );
}

export default List;