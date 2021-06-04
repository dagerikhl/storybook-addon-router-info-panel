import queryString from "query-string";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const WithRouterQueryParamsDecorator = (Story, { parameters }) => {
  const history = useHistory();

  const hasInitializedRef = useRef(false);

  const routerQuery = parameters?.routerQuery;

  useEffect(() => {
    if (hasInitializedRef.current) {
      return;
    }

    if (
      routerQuery &&
      routerQuery.constructor === Object &&
      Object.keys(routerQuery).length === 0
    ) {
      history.push({ search: queryString.stringify(routerQuery) });

      hasInitializedRef.current = true;
    }
  }, [history, routerQuery]);

  return <Story />;
};

export default WithRouterQueryParamsDecorator;
