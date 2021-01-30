import React from 'react';

export function Products(){
    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React GET Request Example' })
    // };
    var ready = false;
    var initialized = false;

    const [productsList, setProductsList] = React.useState({errors:[], message:"", response: [] });

    // const GetData = () => fetch('https://localhost:5001/api/product')
    //     .then(response => response.json())
    //     .then(response => {
    //         setProductsList(response);
    //         ready = true;
    //     })
    //     .finally(()=> console.info('completed'))
    //     .catch(error => console.error('REACT ERROR',error))
        

    
    // if( !initialized ){
    //     initialized = true;
    //     GetData();
    // }

    // const response = await fetch('https://localhost:5001/api/product/1', requestOptions);
    // const data = await response.json();
    return (
    <div className="products">
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