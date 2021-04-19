import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;

function Launches() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h3>Loading ...</h3>;
  else if (error) return <h3>Opps, Error</h3>;
  return data.launches.map((launch) => (
    <LaunchItem key={launch.flight_number} launch={launch} />
  ));
}

export default Launches;
