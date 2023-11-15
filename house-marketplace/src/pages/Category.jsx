import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListings } from "./useListings";
import ListingItem from "../components/ListingItem";

function Category() {
  // const [listings, setListings] = useState(null);
  const params = useParams();
  const { listings, isLoading } = useListings();
  const finalListings = listings?.filter(
    (listing) => listing.type === params.categoryName
  );

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
          {finalListings?.map((listing) => (
            <ListingItem key={listing.id} listing={listing} id={listing.id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Category;
