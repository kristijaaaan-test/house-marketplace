import supabase from "./supabase";

export async function getListings() {
  const { data, error } = await supabase.from("listings").select("*");

  if (error) throw new Error("Listings could not be loaded");

  return data;
}
