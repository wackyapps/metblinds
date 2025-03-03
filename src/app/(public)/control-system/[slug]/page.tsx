const page = () => {
  return <div>control system details</div>;
};

export default page;
export async function generateStaticParams() {
  // Replace this with your actual logic to fetch slugs
  const slugs = ["post-1", "post-2", "post-3"]; // Example slugs
  return slugs.map((slug) => ({
    slug, // Maps each slug to the [slug] param
  }));
}
