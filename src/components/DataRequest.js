import useJsonFetch from '../hooks/useJsonFetch';

function DataRequest(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);
  return (
    <div>
      {data && <div>Mesage: {data.status}</div>}
      {loading && <div>Loading...Please wait.</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default DataRequest;
