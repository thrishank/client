import { ReactBatchAutocomplete } from "@batchservice/react-batch-autocomplete-lib";

export function Suggestion({ onClick }: any) {

  const recentSearch = [
    { name: "8300 Apple" },
    { name: "Apple St" },
    { name: "89001 Alamo" },
    { name: "58651 Rhame" },
    // List of suggestions to be displayed before any input is provided in search input box.
  ];

  const handleError = (e: any) => {
    // Handle error as you want
    console.log("Error while searching: ", e);
  };

  const suggestionList = (data: any) => {
    // Suggestion list data
    console.log("Suggetion List: ", data);
  };

  const onSelect = (data: any) => {
    onClick(data);
  };

  return (
    <div>
      <ReactBatchAutocomplete
        placeholder="Start typing to select the address"
        notFoundText="Not found data"
        debounce={700}
        apiKey="MDBUSyko3Q2cpXho7NboEIEzAaAKncCw9AIbTfbZ"
        domainServer="https://api.batchdata.com/api/v1/address/autocomplete"
        recentSearch={recentSearch}
        handleError={(e: any) => handleError(e)}
        suggestionList={(data: any) => suggestionList(data)}
        onSelect={(data: any) => onSelect(data)}
        displayData="name"
        showNotFound={true}
        take={5}
        filterType={[]}
      />
    </div>
  );
}
