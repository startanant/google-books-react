import React from 'react';
import TextTruncate from 'react-text-truncate';

const TruncateText = (props) => {
    const { lines, text, infoLink } = props;

    return (
        <TextTruncate 
            line={lines}
            element="span"
            truncateText="..."
            text={text}
            textTruncateChild={<a href={infoLink}>Read more</a>}
        />
    )
}

export default TruncateText;