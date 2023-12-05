import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Product() {
return (<div>
<div><Button variant="success">Thêm sản phẩm</Button>{' '}</div>


 <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 5 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody> 
          <tr>{Array.from({ length: 5 }).map((_, index) => {
            return (
               <td key={index}>Table cell {index}</td>
            )}
          )} </tr>
      </tbody>
    </Table></div>)
}

export default Product