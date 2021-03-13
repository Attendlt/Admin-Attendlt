import React from "react";
import { Button } from '@material-ui/core';
function Home() {
    return <>
        <span className="btn">
            <Button variant="contained" color="primary">
                +Create
</Button>
   &nbsp;
<Button variant="contained" color="primary">
                Delete
</Button>
        </span>
    </>;
}

export default Home;