import { memo } from "react";
import { Card } from "../Card";


const MainContent = memo(() => {

    return (
        <>
            <div className="flex 3 gap-4 flex-wrap mt-4 max-md:items-center">
                <Card link="https://www.youtube.com/watch?v=Cs2g2VFWtbo" title="Sample video" type="youtube" />
                <Card link="https://x.com/nitesh_singh5/status/1873975132307546464" title="Sample tweet" type="tweet" />
            </div>
        </>
    );
});

export default MainContent;