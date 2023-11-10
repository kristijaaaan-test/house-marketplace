import supabase from "./supabase";

export async function getListings({ listingType }) {
  const { data, error } = await supabase.from("listings").select("*");
  // .eq("type", listingType);

  if (error) throw new Error("Listings could not be loaded");

  return data;
}
