import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type DateWithResponseInit<T = unknown> = {
  type: "DataWithResponeInit";
  data: T;
  init: ResponseInit;
};

function isDataWithResponseInit<T = unknown>(
  err: unknown
): err is DateWithResponseInit<T> {
  return (
    typeof err === "object" &&
    err !== null &&
    (err as any).type === "DataWithResponseInit"
  );
}

export default function Errors() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h1>ERROR 404</h1>;
      default:
        return (
          <div>
            <h1>Error {error.status}</h1>
            <p>{error.statusText}</p>
          </div>
        );
    }
  }

  if (isDataWithResponseInit<{ message: string }>(error)) {
    return (
      <h1>
        {error.init.status} - {error.data.message}
      </h1>
    );
  }

  return (
    <div>
      <h1>Algo salio mal </h1>
    </div>
  );
}
