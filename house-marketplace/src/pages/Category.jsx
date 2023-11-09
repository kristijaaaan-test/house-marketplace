import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListings } from "./useListings";

function Category() {
  // const [listings, setListings] = useState(null);
  const params = useParams();
  const { listings, isLoading } = useListings();

  console.log(listings);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for rent"
            : "Places for sale"}
        </p>
      </header>

      {/* {listings?.length && <p>No listings for {params.categoryName}</p>} */}
      <main>
        <ul className="categoryListings">
          {listings?.map((listing) => (
            <h3>{listing.name}</h3>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Category;
