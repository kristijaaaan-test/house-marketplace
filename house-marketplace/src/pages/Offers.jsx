import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListings } from "./useListings";
import ListingItem from "../components/ListingItem";

function Offers() {
  // const [listings, setListings] = useState(null);
  const params = useParams();
  const { listings, isLoading } = useListings();
  const offers = listings?.filter((listing) => listing.offer === true);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>

      {/* {listings?.length && <p>No listings for {params.categoryName}</p>} */}
      <main>
        <ul className="categoryListings">
          {offers?.map((listing) => (
            <ListingItem key={listing.id} listing={listing} id={listing.id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Offers;
