import React, { useEffect } from "react";
import gql from "graphql-tag";
import Link from "./Link";
import { useLazyQuery } from "react-apollo";

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

export const Search = () => {
  const [links, setLinks] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  const [execute, { called, loading, data, error }] = useLazyQuery(
    FEED_SEARCH_QUERY,
    {
      variables: { filter }
    }
  );

  useEffect(() => {
    if (called && data) {
      setLinks(data && data.feed.links);
    }
  }, [data])

  const executeSearch = async () => {
    execute();
  };

  return (
    <>
      <div>
        Search
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <button onClick={executeSearch}>OK</button>
      </div>
      {called && loading ? (
        <span>Loading...</span>
      ) : links.length > 0 ? (
        links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))
      ) : null}
    </>
  );
};
