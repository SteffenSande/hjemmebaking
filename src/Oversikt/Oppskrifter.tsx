import React from "react";
import useSWR from "swr";
import {fetcher} from "../utils/fetcher";

const Oppskrifter = () => {
    const {data, error} = useSWR("/api/oppskrifter", fetcher);

    if (error) return <h1>Noe gikk gale</h1>
    if (!data) return <h1>Henter oppskrifter</h1>
    console.log(data);
    return (
        <div>
            Her kommer det en liste med oppskriftene
        </div>
    );
};
export default Oppskrifter;