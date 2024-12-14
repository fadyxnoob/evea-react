import React, { memo } from 'react'

const Button = ({ title, classes }) => {
    return (
        <button className={`${classes}`}>
            {title}
        </button>
    )
}

export default memo(Button)
