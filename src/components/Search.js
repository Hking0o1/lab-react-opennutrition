import {Input } from 'antd';
const lableStyle ={fontSize:'20px', textAlign:'left' ,fontWeight:'bold',padding:'10px'};
 
function Search({ handleSearch }) {
    return (
        <div style={{ margin: '20px' }}>
            <label style={lableStyle}>Search</label>
            <Input
                placeholder="Search food items..."
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: '60vw',border: '1px solid #000'}}
            />
        </div>
    );
}

export default Search;