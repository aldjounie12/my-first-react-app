import React from 'react';

const Header = (props) => {
return (
<div>
<h1>ToDo App</h1>
<h6>{props.subtitle}</h6>
</div>
)
}
export default Header