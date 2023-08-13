import React from 'react'
const MyLink = React.forwardRef(({ onClick, href }, ref) => {
return (
<a href={href} onClick={onClick} ref={ref}> MyLink</a>
)
})
export default MyLink