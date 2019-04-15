import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";

export default function withLazy(path, loading) {
  const LazyComponent = lazy(path);
  return function(props) {
    return (
      <Suspense fallback={loading}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
