export function Products(){
    return (
    <div class="products">
        <h1>Products to display</h1>

        <table>
            <thead>
                <tr>
                    <th>Barcode</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>015151551</td>
                    <td>Product A</td>
                    <td>Description Product A</td>
                    <td><button>View Details</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}