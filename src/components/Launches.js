import React from "react";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h3>Loading ...</h3>;
  else if (error) {
    console.log("error : ", error);
    return <h3>Opps, Error</h3>;
  }

  return <h1>{data?.launches[0].flight_number}</h1>;
}

export default Launches;
