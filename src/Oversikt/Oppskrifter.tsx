import React from "react";

const Oppskrifter = () => {
    React.useEffect(() => {
        fetch("/api/v1").then(res => res.text().then(text => console.log(text)));
    }, [])
    return (
        <div>
            Her kommer det en liste med oppskriftene
        </div>
    );
};

export default Oppskrifter;